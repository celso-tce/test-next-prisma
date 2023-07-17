'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>();

  const pathname = usePathname();

  return (
    <div
      className="h-full overflow-auto flex flex-col bg-gray-700"
      style={{ width: 300 }}
    >
      <div className="mt-2 flex flex-wrap px-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            className={`flex-0 px-4 py-2 m-2 bg-slate-600`
              + ` ${index === currentIndex ? 'text-yellow-400' : 'hover:text-yellow-500'}`}
            onClick={() => setCurrentIndex(index)}
          >
            # {index}
          </button>
        ))}
      </div>

      <div className="my-4 border-b border-slate-600" />

      <div className="px-4">
        <ul className="space-y-2 list-disc pl-4">
          {[
            '/foo',
            '/foo/bar',
            '/foo/baz',
          ].map((path, index) => (
            <li
              key={index}
              className={`${path === pathname ? 'text-yellow-400' : 'hover:text-yellow-500'}`}
            >
              <Link href={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
