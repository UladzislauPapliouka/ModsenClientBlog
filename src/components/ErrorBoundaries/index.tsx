import React, { Component, type ErrorInfo } from 'react';

import styles from './errorBoudaries.module.scss';

import { type IErrorBoundaryProps, type IErrorBoundaryState } from './types';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { state, props } = this;

    return state.hasError ? (
      <div className={styles.wrapper}>
        <span className={styles.message}>{state.error?.message}</span>
        <span className={styles.stack}>{state.errorInfo?.componentStack}</span>
      </div>
    ) : (
      props.children
    );
  }
}
export default ErrorBoundary;
