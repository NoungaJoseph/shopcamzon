import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { ProductModelViewer } from '../components/ProductModelViewer';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Maximize, RefreshCw, Smartphone, Bluetooth, Crosshair, Battery } from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useTranslation(['home', 'common', 'shop']);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  // Showcase video state
  const showcaseVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Pause video when out of view
  useEffect(() => {
    const video = showcaseVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => { }); // Catch autoplay rejection
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.unobserve(video);
  }, [isPlaying]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const carouselItems = [
    { id: 'product_1', img: '1' },
    { id: 'product_5', img: '5' },
    { id: 'product_8', img: '8' },
    { id: 'product_9', img: '9' },
  ];

  const advantages = t('home:advantages.items', { returnObjects: true }) as Array<{ title: string, desc: string }>;
  const productDetails = t('home:productDetails.items', { returnObjects: true }) as Array<{ num: string, title: string, desc: string }>;

  // Icons for advantages
  const AdvantageIcons = [Crosshair, Maximize, Bluetooth, Smartphone, RefreshCw, Battery];

  return (
    <div className="flex flex-col">
      {/* 5.1 Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-10 pb-20 overflow-hidden bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-headline whitespace-pre-line leading-tight uppercase tracking-[0.15em] font-light text-[var(--color-text-primary)] drop-shadow-sm">
              {t('home:hero.title')}
            </h1>
            <Divider />
            <p className="text-[var(--color-text-primary)] text-lg max-w-md mt-6 font-medium">
              {t('home:hero.subtitle')}
            </p>
          </Reveal>

          <Reveal className="relative h-[400px] md:h-[500px] flex justify-center items-center">
            <ProductModelViewer className="w-full h-full" />
          </Reveal>
        </div>
      </section>

      {/* 5.1b Spec/Trust Strip */}
      <section className="bg-[var(--color-bg-white)] py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-gray-200">
          {[1, 2, 3, 4].map(num => (
            <div key={num} className="flex flex-col">
              <span className="text-3xl font-bold font-headline text-[var(--color-black)]">{t(`home:specs.stat${num}.value`)}</span>
              <span className="text-sm text-[var(--color-text-muted)] mt-2 font-semibold uppercase tracking-wider">{t(`home:specs.stat${num}.label`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5.1c Key Features Grid */}
      <section className="bg-[var(--color-bg-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:advantages.title')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4">{t('home:advantages.description')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {advantages.map((item, i) => {
              const Icon = AdvantageIcons[i % AdvantageIcons.length];
              return (
                <Reveal key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border border-[var(--color-black)] flex items-center justify-center mb-6 bg-white">
                    <Icon size={32} strokeWidth={1} />
                  </div>
                  <h3 className="font-bold uppercase tracking-wider mb-3 text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.1d Product Details (Numbered) */}
      <section className="bg-[var(--color-bg-white)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:productDetails.title', 'Design Details')}</h2>
            <Divider />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {productDetails.map((item, i) => {
              const detailImages = ['13', '14', '15'];
              return (
                <Reveal key={i} className="flex flex-col items-center text-center">
                  <div className="w-full aspect-[4/3] bg-gray-100 mb-8 overflow-hidden">
                    <img src={`/${detailImages[i % detailImages.length]}.jpg`} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[var(--color-black)] flex items-center justify-center mb-6">
                    <span className="font-headline font-bold">{item.num}</span>
                  </div>
                  <h3 className="font-bold uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)]">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.2 Product Carousel */}
      <section className="bg-[var(--color-bg-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:featured.title')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4">{t('home:featured.description')}</p>
          </Reveal>

          <Reveal className="relative mt-8">
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors" 
              aria-label="Previous"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <div 
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide px-6 md:px-12 py-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-[320px] flex flex-col bg-white border border-[var(--color-black)] group">
                  <Link to={`/product/${item.id}`} className="block w-full aspect-[4/5] relative overflow-hidden bg-white p-6">
                    <img src={`/${item.img}.jpg`} alt={t(`shop:products.${item.id}.name`)} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="bg-[var(--color-bg-cream)] p-6 flex flex-col border-t border-[var(--color-black)] flex-grow justify-between">
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <h3 className="text-lg font-headline tracking-wide text-[var(--color-black)] leading-tight text-left">{t(`shop:products.${item.id}.name`)}</h3>
                      <span className="text-lg font-body whitespace-nowrap text-[var(--color-text-muted)]">60,000 XAF</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({ id: item.id, name: t(`shop:products.${item.id}.name`), price: 60000, img: item.img });
                      }}
                      className="w-full bg-transparent text-[var(--color-black)] px-6 py-3 uppercase font-bold text-xs tracking-wider border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors"
                    >
                      {t('common:buttons.addToCart', 'Add to Cart')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors" 
              aria-label="Next"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* 5.2b See It In Action Showcase */}
      <section className="bg-[var(--color-bg-white)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:videoShowcase.title', 'See It In Action')}</h2>
            <Divider />
          </Reveal>

          <Reveal className="max-w-5xl mx-auto">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={showcaseVideoRef}
                className="w-full h-full object-cover"
                poster="/16.jpg"
                playsInline
                muted
                loop
                autoPlay
                controls
              >
                <source src="/SHOP CAMZON compressed.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5.3 Promo 1 */}
      <section className="bg-[var(--color-bg-white)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="bg-[var(--color-bg-cream)] h-[500px] flex items-center justify-center relative overflow-hidden">
            <img src="/16.jpg" alt="Promo Lifestyle" className="absolute w-full h-full object-cover" />
          </Reveal>
          <Reveal className="flex flex-col justify-center px-12 py-16 md:px-24">
            <span className="text-xs uppercase tracking-widest mb-4 font-semibold text-[var(--color-text-primary)]">{t('home:advantages.title')}</span>
            <h2 className="text-4xl font-headline uppercase tracking-widest leading-tight">{t('home:tech.title')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-6 mb-8">{t('home:aiCloud.description')}</p>
            <Link to="/about">
              <Button variant="outline" className="w-fit">{t('common:buttons.seeHowItWorks')}</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5.3.5 AI Gesture Control */}
      <section className="bg-[var(--color-bg-white)] py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:gestureGuide.title', 'AI Gesture Control')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl">
              {t('home:gestureGuide.subtitle', 'Take full control of your shooting experience with intuitive hand gestures.')}
            </p>
          </Reveal>

          <Reveal className="max-w-4xl mx-auto flex justify-center">
            <img src="/23.jpg" alt="AI Gesture Control Signs" className="w-full max-w-2xl rounded-xl shadow-lg border border-gray-100" />
          </Reveal>
        </div>
      </section>

      {/* 5.4 Promo 2 */}
      <section className="bg-[var(--color-bg-blush)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="flex flex-col justify-center px-12 py-16 md:px-24 order-2 md:order-1">
            <span className="text-xs uppercase tracking-widest mb-4 font-semibold text-[var(--color-text-primary)]">Discover</span>
            <h2 className="text-4xl font-headline uppercase tracking-widest leading-tight">{t('home:useCases.travel')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-6 mb-8">{t('home:useCases.vlogging')}</p>
            <Link to="/shop">
              <Button variant="outline" className="w-fit">{t('common:buttons.discoverRange')}</Button>
            </Link>
          </Reveal>
          <Reveal className="h-[500px] order-1 md:order-2 flex items-center justify-center overflow-hidden">
            <img src="/11.jpg" alt="Use Cases" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* 5.4b Lifestyle Use-case */}
      <section className="bg-[var(--color-bg-white)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="bg-[var(--color-bg-cream)] h-[500px] flex items-center justify-center relative overflow-hidden">
            <img src="/22.jpg" alt="Lifestyle Group" className="absolute w-full h-full object-cover" />
          </Reveal>
          <Reveal className="flex flex-col justify-center px-12 py-16 md:px-24 bg-[var(--color-bg-cream)] md:bg-[var(--color-bg-white)]">
            <span className="text-xs uppercase tracking-widest mb-4 font-semibold text-[var(--color-text-primary)]">Lifestyle</span>
            <h2 className="text-4xl font-headline uppercase tracking-widest leading-tight whitespace-pre-line">{t('home:lifestyle.title', 'Made for every moment')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-6 mb-8">{t('home:lifestyle.description', 'From solo travel vlogs to group adventures, never miss a shot with intelligent tracking.')}</p>
          </Reveal>
        </div>
      </section>

      {/* Q04 Product Feature Section */}
      <section className="bg-[var(--color-bg-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-4 font-semibold text-[var(--color-text-muted)]">Q04-Basic</span>
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:q04.title', 'Packed With Technology')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl">{t('home:q04.subtitle', 'Every feature engineered for the modern content creator.')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <Reveal className="overflow-hidden">
              <img src="/q04-features.jpg" alt="Q04-Basic Features" className="w-full h-full object-contain" />
            </Reveal>
            <Reveal className="bg-white p-12 flex flex-col gap-5">
              {[
                { icon: '📡', title: t('home:q04.features.bluetooth', 'Bluetooth Remote Control'), desc: t('home:q04.features.bluetoothDesc', 'Control your shots from a distance with the included Bluetooth remote.') },
                { icon: '🔄', title: t('home:q04.features.rotation', '360° Rotation Follow-up'), desc: t('home:q04.features.rotationDesc', 'Seamless full-circle AI face tracking keeps you in frame at all times.') },
                { icon: '⚡', title: t('home:q04.features.charging', 'TYPE-C Fast Charging'), desc: t('home:q04.features.chargingDesc', '7 hours of battery life with modern Type-C fast charging support.') },
                { icon: '📱', title: t('home:q04.features.noApp', 'No App Required'), desc: t('home:q04.features.noAppDesc', 'Works straight out of the box — zero downloads, zero setup needed.') },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl mt-1">{feature.icon}</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1">{feature.title}</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Remote Control Guide Section */}
      <section className="bg-[var(--color-bg-white)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:remoteGuide.title', 'Master Your Remote')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl">{t('home:remoteGuide.subtitle', 'Every button on your Bluetooth remote has a purpose. Here is what each one does.')}</p>
          </Reveal>
          <Reveal className="max-w-4xl mx-auto overflow-hidden shadow-lg">
            <img src="/remote-guide.jpg" alt="Remote Control Guide" className="w-full h-auto object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Gesture Control Section */}
      <section className="bg-[var(--color-bg-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:gestureGuide.title', 'AI Gesture Control')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl">{t('home:gestureGuide.subtitle', 'Your hands are the controller. Use simple gestures to start tracking, take photos, or pause.')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal className="overflow-hidden">
              <img src="/gesture-guide.jpg" alt="AI Gesture Control Guide" className="w-full h-auto object-contain" />
            </Reveal>
            <Reveal className="flex flex-col gap-6">
              <div className="bg-white p-8 border-l-4 border-[var(--color-black)]">
                <h4 className="font-headline uppercase tracking-widest text-xl mb-3">{t('home:gestureGuide.ok', '👌 OK Gesture')}</h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{t('home:gestureGuide.okDesc', 'Show the OK hand sign to the camera and the tracker will begin following you within 1 second.')}</p>
              </div>
              <div className="bg-white p-8 border-l-4 border-[var(--color-text-muted)]">
                <h4 className="font-headline uppercase tracking-widest text-xl mb-3">{t('home:gestureGuide.palm', '🤚 Palm Gesture')}</h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{t('home:gestureGuide.palmDesc', 'Hold your open palm up to the camera. Within 3 seconds, tracking will pause and the device will hold its position.')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5.5 Newsletter */}
      <section className="relative py-32 overflow-hidden bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/contact.png" alt="Stay Updated Background" className="w-full h-full object-cover object-center opacity-40" />
        </div>
        <Reveal className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="text-sm uppercase tracking-widest mb-4 font-semibold text-white/80">{t('home:newsletter.label', 'Stay Updated')}</span>
          <h2 className="text-4xl md:text-5xl font-headline uppercase tracking-widest text-white">{t('home:newsletter.title')}</h2>
          <div className="mt-10">
            <Button variant="outline" className="border-white text-[var(--color-black)] hover:bg-white hover:text-black">{t('home:newsletter.button')}</Button>
          </div>
        </Reveal>
      </section>

      {/* 5.6 Gallery */}
      <section className="bg-[var(--color-bg-white)] pt-24">
        <Reveal className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-headline uppercase tracking-widest">{t('home:gallery.title', 'Gallery')}</h2>
          <Divider />
          <p className="text-[var(--color-text-muted)] mt-4">{t('home:gallery.subtitle', 'Follow us @Shopcamzon')}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-0">
          {[17, 18, 19, 20].map((imgNum) => (
            <div key={imgNum} className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer border-none rounded-none">
              <img src={`/${imgNum}.jpg`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300 ease-out" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
