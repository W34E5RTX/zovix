"use client";

import * as React from 'react';
import { motion, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setValue(event.matches);

    onChange({ matches: media.matches } as MediaQueryListEvent);
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return value;
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-[0_18px_45px_rgba(99,102,241,0.35)] hover:brightness-110',
        destructive: 'bg-red-600 text-white hover:bg-red-500',
        outline: 'border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-violet-400 hover:text-white',
        secondary: 'bg-slate-800 text-slate-300 hover:bg-slate-700',
        ghost: 'text-slate-300 hover:bg-slate-800',
        link: 'text-violet-300 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm: 'h-9 rounded-full px-3',
        lg: 'h-11 rounded-full px-7',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

function StarField({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [initialPos] = React.useState({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  React.useEffect(() => {
    if (!containerRef.current || mousePosition.x === null || mousePosition.y === null) {
      springX.set(0);
      springY.set(0);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const starX =
      containerRect.left +
      (parseFloat(initialPos.left) / 100) * containerRect.width;
    const starY =
      containerRect.top +
      (parseFloat(initialPos.top) / 100) * containerRect.height;

    const deltaX = mousePosition.x - starX;
    const deltaY = mousePosition.y - starY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const radius = 650;

    if (distance < radius) {
      const force = 1 - distance / radius;
      springX.set(deltaX * force * 0.45);
      springY.set(deltaY * force * 0.45);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePosition, initialPos, containerRef, springX, springY]);

  return (
    <motion.div
      className="absolute rounded-full bg-white/80"
      style={{
        top: initialPos.top,
        left: initialPos.left,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
    />
  );
}

function InteractiveStarfield({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      {Array.from({ length: 160 }).map((_, i) => (
        <StarField
          key={`star-${i}`}
          mousePosition={mousePosition}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

export interface PricingSectionProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

const PricingContext = React.createContext<{
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
}>({
  isMonthly: true,
  setIsMonthly: () => {},
});

export function PricingSection({
  plans,
  title = 'Simple, Transparent Pricing',
  description = 'Choose the plan that fits your growth stage. Every plan includes strategy, product thinking, and a smooth launch path.',
}: PricingSectionProps) {
  const [isMonthly, setIsMonthly] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = React.useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  return (
    <PricingContext.Provider value={{ isMonthly, setIsMonthly }}>
      <div
        ref={containerRef}
        onMouseMove={(event) => setMousePosition({ x: event.clientX, y: event.clientY })}
        onMouseLeave={() => setMousePosition({ x: null, y: null })}
        className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(91,124,255,0.16),transparent_28%),#070b17] py-20 sm:py-24"
      >
        <InteractiveStarfield mousePosition={mousePosition} containerRef={containerRef} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Pricing</p>
            <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl">{title}</h2>
            <p className="text-lg text-slate-300">{description}</p>
          </div>

          <PricingToggle />

          <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PricingContext.Provider>
  );
}

function PricingToggle() {
  const { isMonthly, setIsMonthly } = React.useContext(PricingContext);
  const confettiRef = React.useRef<HTMLDivElement | null>(null);
  const monthlyBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const annualBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const [pillStyle, setPillStyle] = React.useState({ width: 0, transform: 'translateX(0px)' });

  React.useEffect(() => {
    const btnRef = isMonthly ? monthlyBtnRef : annualBtnRef;
    if (btnRef.current) {
      setPillStyle({
        width: btnRef.current.offsetWidth,
        transform: `translateX(${btnRef.current.offsetLeft}px)`,
      });
    }
  }, [isMonthly]);

  const handleToggle = (monthly: boolean) => {
    if (isMonthly === monthly) return;
    setIsMonthly(monthly);

    if (!monthly && confettiRef.current) {
      const rect = annualBtnRef.current?.getBoundingClientRect();
      if (!rect) return;

      const originX = (rect.left + rect.width / 2) / window.innerWidth;
      const originY = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 90,
        spread: 90,
        origin: { x: originX, y: originY },
        colors: ['#5b7cff', '#8a6bff', '#6ec7ff', '#ffffff'],
        ticks: 300,
        gravity: 1.1,
        decay: 0.94,
        startVelocity: 30,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div ref={confettiRef} className="relative flex w-fit items-center rounded-full border border-slate-700 bg-slate-900/80 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.5)] backdrop-blur-sm">
        <motion.div
          className="absolute left-0 top-0 h-[calc(100%-8px)] m-1 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 shadow-[0_10px_30px_rgba(99,102,241,0.45)]"
          animate={{
            width: pillStyle.width,
            x: Number.parseFloat(pillStyle.transform.replace('translateX(', '').replace('px)', '')) || 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        />

        <button
          ref={monthlyBtnRef}
          onClick={() => handleToggle(true)}
          className={cn(
            'relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6',
            isMonthly ? 'text-white' : 'text-slate-300 hover:text-white',
          )}
        >
          Monthly
        </button>

        <button
          ref={annualBtnRef}
          onClick={() => handleToggle(false)}
          className={cn(
            'relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6',
            !isMonthly ? 'text-white' : 'text-slate-300 hover:text-white',
          )}
        >
          Annual
          <span className={cn('hidden sm:inline', !isMonthly ? 'text-white/80' : 'text-slate-300')}>
            {' '} (Save 20%)
          </span>
        </button>
      </div>
    </div>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const { isMonthly } = React.useContext(PricingContext);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: plan.isPopular && isDesktop ? -20 : 0,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 18,
        delay: index * 0.15,
      }}
      className={cn(
        'relative flex flex-col rounded-2xl border bg-slate-900/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.55)] backdrop-blur-sm',
        plan.isPopular ? 'border-indigo-500/60 shadow-[0_20px_70px_rgba(99,102,241,0.22)]' : 'border-slate-800',
      )}
    >
      {plan.isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(91,124,255,0.3)]">
            <Star className="h-3.5 w-3.5 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col text-center">
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        <p className="mt-3 text-sm text-slate-300">{plan.description}</p>

        <div className="mt-8 flex items-end justify-center gap-x-1">
          <span className="text-4xl font-black tracking-normal text-white">
            <NumberFlow
              value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
              format={{
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }}
              className="font-variant-numeric: tabular-nums"
            />
          </span>
          <span className="pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            / {plan.period}
          </span>
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-300">
          {isMonthly ? 'Billed monthly' : 'Billed annually'}
        </p>

        <ul className="mt-8 space-y-3 text-left text-sm text-slate-300">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30">
                <Check className="h-3.5 w-3.5" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <Link
            to={plan.href}
            className={cn(
              buttonVariants({
                variant: plan.isPopular ? 'default' : 'outline',
                size: 'lg',
              }),
              'w-full justify-center',
            )}
          >
            {plan.buttonText} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export const pricingPlans = [
  {
    name: 'Starter',
    price: '50',
    yearlyPrice: '40',
    period: 'month',
    description: 'Perfect for individuals and early-stage launches.',
    buttonText: 'Start Free Trial',
    href: '/contact',
    features: [
      'Up to 10 projects',
      'Basic analytics',
      '48-hour support response',
      'Limited API access',
      'Community support',
    ],
  },
  {
    name: 'Professional',
    price: '99',
    yearlyPrice: '79',
    period: 'month',
    description: 'Designed for growing teams and scaling products.',
    buttonText: 'Get Started',
    href: '/contact',
    isPopular: true,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      '24-hour support response',
      'Full API access',
      'Priority support & team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    price: '299',
    yearlyPrice: '239',
    period: 'month',
    description: 'For businesses needing tailored strategy and scale.',
    buttonText: 'Contact Sales',
    href: '/contact',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated account manager',
      'SSO & advanced security',
      'Tailored onboarding and roadmap',
    ],
  },
];

export default function PricingSectionDemo() {
  return (
    <PricingSection
      plans={pricingPlans}
      title="Find the perfect plan for your next digital move."
      description="Select the ideal package for your goals and launch with clarity, speed, and momentum."
    />
  );
}
