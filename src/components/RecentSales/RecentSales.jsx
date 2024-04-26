import { Avatar, AvatarImage } from "../ui/avatar";

export default function RecentSales() {
  // Your sales data
  const sales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      image: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      image: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
      image: "https://ui.shadcn.com/avatars/05.png",
    },
  ];

  return (
    <div className="max-w-md mx-auto  overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Recent Sales</div>
        <p className="text-gray-700 text-base">
          You made 265 sales this month.
        </p>
      </div>
      <div className="px-6 py-4">
        {sales.map((sale, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-200"
          >
            <div className="flex w-80 items-center  space-x-4">
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage src={sale.image} />
              </Avatar>
            
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">{sale.name}</span>
                <span className="text-gray-600 text-sm">{sale.email}</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {sale.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
