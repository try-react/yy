import React from "react";

type Props = {
  children: React.ReactNode;
};
type State = {
  error?: Error;
};
type ReactErrorInfo = {
  componentStack: string;
};
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, _info?: ReactErrorInfo): void {
    // console.log(error);
    // console.log(info);
    this.setState({ error: error });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return this.state.error ? (
      <>
        <p>想定外のエラーが発生しました。</p>
        <a href="/">Topへ</a>
      </>
    ) : (
      this.props.children
    );
  }
}
