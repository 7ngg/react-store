const About = () => {
  return (
    <div className="container w-11/12 shadow rounded border border-black p-5 bg-white my-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="text-lg leading-7 text-center mb-8 max-w-2xl">
        <p>
          Welcome to Our E-commerce Store! We are dedicated to bringing you the
          best products at the most affordable prices. Our mission is to provide
          a seamless and enjoyable shopping experience for all our customers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-6 space-x-6">
        <div className="w-full md:w-5/12 lg:w-4/12 mb-4">
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
            alt="Our Team"
            className="rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-5/12 lg:w-4/12 mb-4">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Our Office"
            className="rounded shadow-lg"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-7 text-center max-w-2xl">
          Our mission is to deliver high-quality products that bring value and
          satisfaction to our customers. We strive to provide an exceptional
          shopping experience through our diverse range of products and
          outstanding customer service.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-7 text-left max-w-2xl space-y-2">
          <li>
            Customer Satisfaction: We prioritize our customers' needs and work
            tirelessly to meet their expectations.
          </li>
          <li>
            Integrity: We conduct our business with honesty and transparency.
          </li>
          <li>
            Quality: We offer products that meet the highest standards of
            quality and durability.
          </li>
          <li>
            Innovation: We embrace innovation and continuously seek to improve
            our offerings and services.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg leading-7 text-center max-w-2xl">
          If you have any questions or need assistance, please don't hesitate to
          contact us at:
          <br />
          <a
            href="mailto:support@ecommerce.com"
            className="text-blue-500 underline"
          >
            support@ecommerce.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
