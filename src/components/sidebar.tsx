import React from "react";
import Checkbox from "./checkbox"

const Sidebar = () => {
  return (
    <aside className="h-[700px] sticky min-w-[200px] min-h-5/6 p-2 border border-stone-400 rounded shadow flex flex-col gap-3">
      <div>
        <h1 className="mb-2 sidebar-header font-bold">Keywords</h1>
        <Checkbox label="Label" description="Description" />
        <Checkbox label="Label" description="Description" />
        <Checkbox label="Label" description="Description" />
      </div>
      <div>
        <div className="flex justify-between">
          <p>Label</p>
          <p className="before:content-['$']">0-100</p>
        </div>
        <input type="range" className="w-full outline-none accent-stone-900 h-[3px]" />
      </div>
      <div>
        <h1 className="mb-2 sidebar-header font-bold">Color</h1>
        <Checkbox label="Label" />
        <Checkbox label="Label" />
        <Checkbox label="Label" />
      </div>
      <div>
        <h1 className="mb-2 sidebar-header font-bold">Size</h1>
        <Checkbox label="Label" />
        <Checkbox label="Label" />
        <Checkbox label="Label" />
      </div>
    </aside>
  );
};

export default Sidebar;
