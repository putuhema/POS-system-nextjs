import Card from "@/components/ui/card";
import MenuCard from "@/components/ui/menu-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-full flex flex-col border-r-2 h-screen overflow-auto p-6">
        <div className="">
          <div className="flex justify-between mb-4">
            <p className="font-bold text-xl">Order List</p>
            <p className="text-neutral-400">see all</p>
          </div>
          <div className="flex gap-4 ">
            {[1, 2, 3, 4, 5].map((id) => (
              <Card
                key={id}
                id="234423"
                name="Lebron James"
                itemsCount={3}
                table={12}
                status="complete"
              />
            ))}
          </div>
          <Tabs className="w-full mt-4">
            <TabsList>
              <TabsTrigger value="appetizer">Appetizer</TabsTrigger>
              <TabsTrigger value="maincourse">Main Course</TabsTrigger>
              <TabsTrigger value="dessert">Dessert</TabsTrigger>
              <TabsTrigger value="beverage">Beverage</TabsTrigger>
            </TabsList>
            <div className="flex justify-between mt-8 mb-4">
              <p className="font-bold text-xl">Menu</p>
              <p className="text-neutral-400">see all</p>
            </div>
            <TabsContent value="appetizer">Appetizer content</TabsContent>
            <TabsContent
              value="maincourse"
              className="grid grid-cols-3 gap-4 overflow-auto"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <MenuCard key={id} />
              ))}
            </TabsContent>
            <TabsContent value="dessert">Dessert</TabsContent>
            <TabsContent value="beverage">Beverage</TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="w-1/4 p-4">
        <div className="flex flex-col gap-4">
          <p>Costumer Information</p>
          <input
            type="text"
            className="w-full py-2 px-1.5 border rounded-md"
            placeholder="Costumer name"
          />
          <input
            type="text"
            className="w-full py-2 px-1.5 border rounded-md"
            placeholder="Table"
          />
          <hr className="mt-8" />
        </div>
      </div>
    </div>
  );
}
