import React from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

const directionToClass: Record<NonNullable<RevealProps['direction']>, string> = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  none: '',
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  as = 'div',
  delayMs = 0,
  direction = 'up',
}) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setVisible(true), delayMs);
            } else {
              setVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const Component = as as any;
  const hiddenTransform = directionToClass[direction];

  return (
    <Component
      ref={ref}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTransform}`,
        className || '',
      ].join(' ')}
    >
      {children}
    </Component>
  );
};

export default Reveal;


