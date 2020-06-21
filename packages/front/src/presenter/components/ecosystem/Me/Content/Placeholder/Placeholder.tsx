import React from "react";
import type { FC } from "react";
import { List } from "react-content-loader";

export const Placeholder: FC = () => (
  <div style={{ marginTop: 15 }}>
    <List backgroundColor="#333" foregroundColor="#999" height="160" />
  </div>
);
