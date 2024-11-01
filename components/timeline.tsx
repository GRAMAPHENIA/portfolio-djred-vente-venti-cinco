import React from "react";

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/10"></div>
      <ul className="space-y-12 relative">{children}</ul>
    </div>
  );
};

interface TimelineItemProps {
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children }) => {
  return (
    <li className="relative pl-12">
      <div className="absolute left-0 top-2 h-8 w-8 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-primary/70"></div>
      </div>
      {children}
    </li>
  );
};
