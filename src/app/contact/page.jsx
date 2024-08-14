export default function PageContact() {
  return (
    <div className="w-full m-auto">
      <section className="w-full m-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded">
        <h1 className="mb-4 text-2xl font-semibold text-center">Contact Us</h1>
        <p className="text-center mb-4">
          For over 30 years, we have made customer satisfaction our top
          priority.
        </p>

        <section className="text-center">
          <h2 className="text-xl font-semibold mb-2">How to reach us?</h2>
          <ul className="list-disc list-inside">
            <li>0600000000</li>
            <li>mail@fakemail.com</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
