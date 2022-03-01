gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { opacity: 0, duration: 0.5, ease: "back" } })
tl.from(".curacel_headline", { ease: 'linear', autoAlpha: 0 })
    .from(".gsap_head", { x: 80, })
    .from(".gsap_para", { y: 30, }, "<")
    .from(".curacel_header_image", { scale: 0, transformOrigin: "50% 50%" }, "<")
    .from(".start_btn", { y: 30, }, "-=0.4")



// gsap.to(".gsap_para", { text: 'Leading insurers and companies trust Curacel API’s and ecosystems to connect to offer value to their customers.', duration: 1, ease: "sine.in" })

