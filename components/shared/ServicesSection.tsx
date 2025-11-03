import { Camera, Users, Video, Palette, Sparkles, Printer } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    desc: "Capturing your most special day with cinematic and emotional storytelling.",
  },
  {
    icon: Users,
    title: "Portrait Shoots",
    desc: "Personal, couple, and family portraits with premium lighting & styling.",
  },
  {
    icon: Video,
    title: "Event Coverage",
    desc: "Professional photography & videography for events, celebrations & corporate functions.",
  },
  {
    icon: Palette,
    title: "Creative Photoshoot",
    desc: "Stylized studio or outdoor shoots for models, artists, and creators.",
  },
  {
    icon: Sparkles,
    title: "Brand Content",
    desc: "Commercial photo & video content for brands to boost online presence.",
  },
  {
    icon: Printer,
    title: "Album & Prints",
    desc: "Premium-quality albums & framed photo prints for your memories.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#121212] to-purple-800 py-20 "
      id="services"
    >
      <div className="container mx-auto px-4 text-center max-w-7xl ">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          From timeless wedding moments to stunning commercial visuals, we offer
          a full range of photography and videography services.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100"
            >
              <div className="flex items-center justify-center mb-5 h-16 w-16 mx-auto rounded-full bg-purple-600/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
