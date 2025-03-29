// Bileşen form içerir ve butona tıklandığında input alanına otomatik olarak odaklanmasını sağlar.
// input'a focus vermek için gerekli yapı eksik bırakılmış.

// Görevler:
// 1. useRef ile input elementine erişerek, butona tıklandığında input'un focus almasını sağlayın.
// 2. "Focus" butonuna bir onClick eventi ekleyerek input'a focus verilmesini sağlayın.
// 3. Input odaklandığında kullanıcılara görsel geri bildirim sağlayacak bir stil ekleyin
//    (border rengini değiştirme veya gölge ekleme).

// Bonus:
// - Tailwind ile input'un odaklandığında belirgin bir glow efekti almasını sağlayın.
// - Form bileşenini mobil cihazlarda daha uyumlu hale getirin.
//   - Buton ve input’un ekran genişliğine göre nasıl hizalanması gerektiğini açıklayın.
// - Formdaki input alanına özel bir animasyon ekleyin.
//   - odaklandığında input’un genişliğini arttıran efekt ekleyin.
import { useRef } from "react";
export default function Form() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="p-8 mx-auto">
      <div className="px-4 max-w-sm py-5 shadow sm:rounded-lg sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Input&apos;a focus
        </h3>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              ref={inputRef}
              type="email"
              name="email"
              id="email"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none transition-all duration-300 ease-in-out focus:scale-105 focus:shadow-lg focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="button"
            onClick={handleFocus}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Focus
          </button>
        </form>
      </div>
    </div>
  );
}
