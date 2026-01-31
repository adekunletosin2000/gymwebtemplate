// types/gym.ts
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    features: ["Access to gym floor", "Basic locker room", "1 Fitness assessment"],
  },
  {
    name: "Pro",
    price: "$59",
    features: ["Unlimited classes", "Personal trainer (1hr/mo)", "Sauna & Steam room", "Guest passes"],
    isPopular: true,
  },
  {
    name: "Elite",
    price: "$99",
    features: ["24/7 VIP Access", "Weekly PT sessions", "Nutrition coaching", "Free supplements"],
  },
];