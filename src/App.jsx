export default function App() {
  const products = [
    {
      name: "Classic Sneakers",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Luxury Handbag",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Modern Watch",
      price: "$150",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <a href="#home" rel="home">
              <img
                src="/logo.png"
                alt="COLONKODED Logo"
                className="h-14 w-auto"
              />
            </a>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#0A2A66]">
              COLONKODED
            </h1>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm font-medium hover:text-gray-500">
              Home
            </a>
            <a href="#products" className="text-sm font-medium hover:text-gray-500">
              Products
            </a>
            <a href="#about" className="text-sm font-medium hover:text-gray-500">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-gray-500">
              Contact
            </a>
          </nav>

          <button className="rounded-2xl bg-black px-5 py-2 text-sm font-semibold text-white">
            Shop Now
          </button>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 inline-block rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
              New Collection 2026
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              Discover Your
              <span className="block text-gray-500">Perfect Style</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Upgrade your wardrobe with premium fashion, stylish footwear,
              and modern accessories — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-black px-7 py-3 font-semibold text-white">
                Explore Products
              </button>

              <button className="rounded-2xl border border-gray-300 px-7 py-3 font-semibold hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
              alt="Fashion Store"
              className="relative rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fast Delivery",
              desc: "Get your orders delivered quickly and safely.",
            },
            {
              title: "Premium Quality",
              desc: "Carefully selected products with top quality.",
            },
            {
              title: "24/7 Support",
              desc: "Friendly customer service whenever you need help.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Trending Items
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Featured Products
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-[30px] bg-white shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="text-lg font-semibold text-gray-600">
                      {product.price}
                    </span>
                  </div>

                  <button className="mt-6 w-full rounded-2xl bg-black py-3 font-semibold text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t bg-white py-10 text-center text-gray-600"
      >
        <div className="flex items-center justify-center gap-3">
          <img
            src="/logo.png"
            alt="COLONKODED Logo"
            className="h-12 w-auto"
          />
          <h3 className="text-2xl font-black text-[#0A2A66]">COLONKODED</h3>
        </div>
        <p className="mt-3">
          Your one-stop destination for fashion and lifestyle products.
        </p>

        <p className="mt-6 text-sm">
          © 2026 COLONKODED. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
