// types/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  transformation: string; // e.g., "-20lbs in 3 months"
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Marathon Runner",
    content: "IronCore transformed my approach to strength training. The atmosphere is elite and the equipment is second to none.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    transformation: "Sub-3hr Marathon"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Powerlifter",
    content: "Finding a gym that actually has enough squat racks and calibrated plates is a dream. Best investment I've made for my health.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    transformation: "+150lb Deadlift"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Entrepreneur",
    content: "The 24/7 VIP access fits my schedule perfectly. It’s clean, quiet, and full of people who are actually there to work.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    transformation: "Body Recomp Specialist"
  }
];