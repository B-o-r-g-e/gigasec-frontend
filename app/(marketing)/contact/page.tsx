import Footer from "@/components/home/footer";

export default function ContactPage() {
  return (
      <>
          <section className="bg-white py-24">
              <div className="mx-auto max-w-4xl px-6 sm:px-10">
                  <div className="mb-6 font-['Space_Mono',monospace] text-[11px] tracking-[3px] text-[#339a99]">
                      CONTACT
                  </div>
                  <h1 className="mb-6 font-['Syne',sans-serif] text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold tracking-[-0.5px] text-[#0d3d3d]">
                      Let&apos;s Get Started
                  </h1>
                  <p className="mb-10 font-['DM_Sans',sans-serif] text-[16px] leading-[1.7] text-[#667085]">
                      Discover how Gigasec&apos;s blend of engineering excellence and digital innovation can
                      transform your operations.
                  </p>

                  <div className="space-y-4 font-['DM_Sans',sans-serif] text-[16px] text-[#0d3d3d]">
                      <div>Phone: +234 815 444 2732, +234 706 418 3475</div>
                      <div>Email: info@gigasecintl.com</div>
                      <div>Website: gigasecintl.com</div>
                      <div>Locations: Lagos | Port Harcourt | Uyo | Benin | Abuja</div>
                      <div>Port Harcourt: 46 Ordinance Road, Off Trans Amadi Industrial Layout.</div>
                      <div>Lagos: 7 Atunwa Street, Off Unity Road, Ikeja, Lagos.</div>
                  </div>
              </div>
          </section>
          <Footer />
      </>
  )
}
