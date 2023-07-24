import loadingStyles from "./loadingFrame.module.css";


type LoadingProps = {
  children?: React.ReactNode;
};

export function LoadingFrame({ children }: LoadingProps) {
  return (
    <>
      <div className={`overlay ${loadingStyles.loadingContainer}`}>
        {children}
        <div className={`${loadingStyles.loader}`}></div>
      </div>
    </>
  );
}
