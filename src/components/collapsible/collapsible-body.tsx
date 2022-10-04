import * as React from 'react';
import styled from 'styled-components';
import { useCollapsibleContext } from './collapsible-context';

export type CollapsibleBodyProps = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div`
  overflow: hidden;
  transition: height 0.25s ease-in-out;
`;

export const CollapsibleBody: React.FC<CollapsibleBodyProps> = ({
  children,
  style,
  ...props
}: CollapsibleBodyProps) => {
  const { isOpen } = useCollapsibleContext();

  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(
    isOpen ? undefined : 0
  );

  React.useEffect(() => {
    if (!height || !isOpen || !ref.current) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <Container
      {...props}
      style={{ ...style, height }}
      role="region"
      aria-hidden={!isOpen}
    >
      <div ref={ref}>{isOpen && children}</div>
    </Container>
  );
};
