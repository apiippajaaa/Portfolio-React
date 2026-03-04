import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const GetInTouch = () => {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} strokeWidth={1.5} />,
      href: "mailto:your@email.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} strokeWidth={1.5} />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={22} strokeWidth={1.5} />,
      href: "https://wa.me/628xxxxxxxxxx",
    },
    {
      name: "Instagram",
      icon: <Instagram size={22} strokeWidth={1.5} />,
      href: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section
      id="GetInTouch"
      className="relative snap-section min-h-[calc(var(--vh)*100)] flex items-center px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="tracking-[0.45em] uppercase text-xs font-semibold text-white/70">
                Get In Touch
              </span>

              <div className="h-0.5 w-full max-w-[140px] bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Let’s build <br className="hidden sm:block" />
              something Great.
            </h2>

            <p className="text-white/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Open for collaborations, freelance projects, or long-term
              partnerships. Let’s connect and shape something impactful.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* ========================= */}
            {/* 📱 MOBILE – 4 CIRCLES */}
            {/* ========================= */}
            <div className="flex justify-center gap-6 sm:hidden">
              {contacts.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    w-14 h-14
                    flex items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-white/5 backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white/40
                "
                >
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* ========================= */}
            {/* 💻 DESKTOP – LIST */}
            {/* ========================= */}
            <div className="hidden sm:flex flex-col gap-6">
              {contacts.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center justify-between
                    border-b border-white/10
                    py-4
                    transition-all duration-500
                    hover:border-blue-400/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-white/30 group-hover:text-blue-400 transition-colors text-sm tracking-wide">
                    → Connect
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
