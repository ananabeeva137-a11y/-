const steps = [
  "Оставляете заявку",
  "Получаете расчет",
  "Подписываем договор",
  "Принимаем товар",
  "Автоматизированная упаковка",
  "Отправляем",
  "Получаете результат",
];

const services = [
  "Приемка и сортировка",
  "Проверка на брак",
  "Автоматизированная упаковка",
  "Сборка заказов",
  "Отправка на маркетплейсы",
  "Хранение товаров",
  "Интеграции",
];

const benefits = ["Скорость", "Точность", "Надежность", "Поддержка"];

export default function HomePage() {
  return (
    <main className="text-[#202020]">
      <header className="bg-[#1c2c54] p-6 text-white flex justify-between">
        <h2 className="text-2xl font-bold">BOXPACK</h2>
        <nav className="flex gap-4 text-sm">
          <a href="#steps">Как начать</a>
          <a href="#services">Услуги</a>
          <a href="#benefits">Преимущества</a>
        </nav>
      </header>

      <section className="bg-[#1c2c54] text-white p-10 md:p-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="mt-5 text-gray-300">
              Приемка, хранение, упаковка и отправка товаров на маркетплейсы.
            </p>
            <a href="#services" className="inline-block mt-6 border p-3">
              Рассчитать стоимость →
            </a>
          </div>
          <div className="bg-[#d1d5df] rounded-lg min-h-48 flex items-center justify-center text-gray-600">
            Видео упаковочной линии
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {["5000+ заказов", "99,8% точность", "FBO/FBS"].map((item) => (
            <div key={item} className="bg-white/10 p-4 rounded-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="p-10">
        <h2 className="text-2xl font-bold text-center">
          Как начать работать с нами
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {steps.map((item, i) => (
            <div key={item} className="bg-gray-100 p-5 rounded-lg shadow">
              <p className="text-xs text-gray-500">ШАГ {i + 1}</p>
              <h3 className="font-bold mt-2">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#f7f7f7] p-10">
        <h2 className="text-2xl font-bold text-center">
          Услуги фулфилмента
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map((item) => (
            <div key={item} className="bg-white border-t-4 border-[#35c5d2] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="bg-[#1c2c54] text-white p-10">
        <h2 className="text-2xl font-bold text-center">
          Почему выбирают BOXPACK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {benefits.map((item) => (
            <div key={item} className="bg-[#30436d] p-6 rounded-lg">
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="p-8 text-center">
        <h2 className="text-xl font-bold text-[#1c2c54]">BOXPACK</h2>
        <p className="text-gray-500 mt-2">Фулфилмент для вашего бизнеса</p>
      </footer>
    </main>
  );
}