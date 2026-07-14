declare module "@fontsource/*" {}

declare module "*.svg?react" {
  const content: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default content;
}