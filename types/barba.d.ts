declare module '@barba/core' {
  interface BarbaData {
    current: {
      container: HTMLElement;
    };
    next: {
      container: HTMLElement;
    };
  }

  interface BarbaTransition {
    name: string;
    leave?: (data: BarbaData) => void;
    enter?: (data: BarbaData) => void;
    from?: { namespace: string[] };
    to?: { namespace: string[] };
  }

  interface BarbaConfig {
    prevent?: ({ el }: { el: HTMLElement }) => boolean;
    transitions?: BarbaTransition[];
    views?: any[];
    before?: () => void;
    after?: () => void;
  }

  interface Barba {
    init(config: BarbaConfig): void;
    destroy(): void;
  }

  const barba: Barba;
  export default barba;
}
