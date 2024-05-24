import CollectionPiece from "../fragment/CollectionPiece";

export default function Collection() {
  return (
    <div className="mt-16 h-screen w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Koleksi Batik Terbaru
      </h3>
      <div className="flex justify-between mt-4 w-full gap-4 overflow-x-auto">
        <CollectionPiece />
        <CollectionPiece />
        <CollectionPiece />
        <CollectionPiece />
        <CollectionPiece />
      </div>
    </div>
  );
}
