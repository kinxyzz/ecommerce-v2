"use client";

import { z } from "zod";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const formSchema = z.object({
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
});

export default function ProductForm() {
  const [image, setImage] = useState<File>({} as File);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log({ ...values, image });
    setLoading(false);
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
