"use client";

import { z } from "zod";

import { UseUploadImage } from "@/app/hook/useImage";
import { UseCreateProduct, UseGetCategory } from "@/app/hook/useProduct";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export const productSchema = z.object({
  name: z.string().min(6, {
    message: "name must be at least 6 characters.",
  }),
  description: z.string().min(6, {
    message: "description must be at least 6 characters.",
  }),
  price: z.string().min(7, {
    message: "price must be at least X00k.",
  }),
  quantity: z.string().min(1, {
    message: "quantity must be at least 1 stock.",
  }),
  category_id: z.string().min(1),
  image: z.string().optional(),
});

export default function ProductForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>({} as File);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { createProduct } = UseCreateProduct();
  const { category = {} } = UseGetCategory();
  const { uploadImage } = UseUploadImage();
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
      category_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    setLoading(true);
    uploadImage(image, {
      onSuccess(data) {
        createProduct(
          { ...values, image: data.imageUrl },
          {
            onSuccess: () => {
              toast({
                title: "Create Product",
                description: "Success Create Product",
              });
              form.reset();
              if (imageRef.current) {
                imageRef.current.value = "";
              }
              setLoading(false);
            },
          }
        );
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Input Your Name"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="your description"
                  {...field}
                  disabled={loading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="your price"
                  {...field}
                  disabled={loading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                name={field.name}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {category?.data?.map(
                    (cate: { category_id: string; name: string }) => (
                      <SelectItem
                        key={cate.category_id}
                        value={cate.category_id.toString()}
                      >
                        {cate.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="your stock"
                  {...field}
                  disabled={loading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          type="file"
          ref={imageRef}
          placeholder="your imageProduct Url"
          onChange={(e) => {
            setImage(e.target.files ? e.target.files[0] : ({} as File));
          }}
          disabled={loading}
        />

        <div className="flex w-full  justify-end mt-8">
          <Button disabled={loading} type="submit">
            {loading && <Loader2 className="mr-2  h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
