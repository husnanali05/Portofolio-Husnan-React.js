import DataImage, { listTools, listProyek } from "./data";
import Lanyard from "./components/Lanyard";

function App() {
  return (
    <>
      {/* HERO */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Freshgraduate Statistics from ITS</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Husnan</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Fresh graduate in Statistics from Institut Teknologi Sepuluh Nopember
            with experience in data science, artificial intelligence, dashboard
            development, data analysis, and predictive modeling. Passionate about
            building a career in Data Science, Data Analytics, and AI to turn data
            into impactful insights.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* TENTANG */}
      <section
  id="tentang"
  className="mx-auto w-full max-w-[1600px] my-24 md:my-32
             rounded-3xl border-[5px] border-violet-500/40
             shadow-[0_0_30px_rgba(168,85,247,0.4)]
             bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a]
             p-6 md:p-10 py-16 md:py-20"
>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {/* Kiri: teks */}
          <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                About Me
              </h2>

              <p className="text-base md:text-lg leading-relaxed mb-10 text-gray-300">
                I’m Husnan Ali Husnain, a Statistics graduate passionate about
                data science, AI, and building scalable solutions. I enjoy turning
                data into clear, useful insights and crafting practical, performant
                applications. Through projects and internships, I’ve worked across
                predictive modeling, analytics, and cloud-based development—always
                focused on impact and good user experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    20<span className="text-violet-500">+</span>
                  </h1>
                  <p>Project Finished</p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    3<span className="text-violet-500">+</span>
                  </h1>
                  <p>Years of Experience</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  <h1 className="text-3xl md:text-4xl mb-1">
                    3.30<span className="text-violet-500">/4.00</span>
                  </h1>
                  <p>GPA</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-violet-400">
                Working with heart, creating with mind.
              </p>
            </div>
          </div>

          {/* Kanan: Lanyard */}
          <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center md:justify-end">
            <div className="mt-8 lg:mt-0 lg:flex-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
                <Lanyard position={[0, 0, 15]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools &amp; Technologies
        </h1>
        <p
          className="w-full md:w-2/3 lg:w-2/5 text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          My Professional Skills
        </p>

        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
              className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                loading="lazy"
              />
              <div className="flex flex-col overflow-hidden">
                <span className="text-lg font-semibold block truncate">
                  {tool.nama}
                </span>
                <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some of the projects I've worked on.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    href="#"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl font-bold mb-2 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          If you would like to get in touch, feel free to reach out!
        </p>
        <form
          action="https://formsubmit.co/husnanalih@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 rounded-md mx-auto sm:w-fit w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Your Name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="7"
                cols="45"
                placeholder="Message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;