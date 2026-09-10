import React from "react";
import { forwardRef } from "react";
import { List, useDynamicRowHeight } from "react-window";
const VirtualList = ({
  style,
  rowComponent,
  rowCount,
  rowHeight,
  rowProps,
}) => {
  const dynamicHeight = useDynamicRowHeight({ defaultRowHeight: rowHeight });

  return (
    <List
      style={style}
      rowComponent={rowComponent}
      rowCount={rowCount}
      rowHeight={dynamicHeight ? dynamicHeight : rowHeight}
      rowProps={rowProps}
    />
  );
};

export default VirtualList;
