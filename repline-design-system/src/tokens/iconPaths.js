// Repline icon system 1.0 — 24x24 grid, stroke 1.9, round caps and joins.
// Raw SVG files live in src/assets/icons and are identical to these paths.
export const iconPaths = {
  home: "<path d=\"M4.4 10.9 12 4.6l7.6 6.3v8.2a1.5 1.5 0 0 1-1.5 1.5H5.9a1.5 1.5 0 0 1-1.5-1.5z\"/><path d=\"M9.9 20.6v-4.6h4.2v4.6\"/>",
  workouts: "<rect x=\"3.6\" y=\"5.2\" width=\"16.8\" height=\"15.2\" rx=\"3.4\"/><path d=\"M8 3.2v3.6M16 3.2v3.6M3.6 10.2h16.8\"/><path d=\"m9.1 15.2 2 2 3.8-3.9\"/>",
  nutrition: "<path d=\"M6.7 3.4v4.8M9.7 3.4v4.8M12.7 3.4v4.8\"/><path d=\"M6.7 8.2h6\"/><path d=\"M9.7 8.2v12.4\"/><path d=\"M17.5 3.4v17.2\"/><path d=\"M17.5 3.4c-2.3 2.4-3.4 5.1-3.4 7.5 0 1.3 1.1 2.1 3.4 2.1\"/>",
  chronicle: "<path d=\"M7.2 5.2h9.6a3 3 0 0 1 3 3v8.6\"/><rect x=\"3.6\" y=\"7.6\" width=\"13\" height=\"12.8\" rx=\"3\"/><path d=\"M6.8 12.6h6.6M6.8 16.2h4.4\"/>",
  discovery: "<circle cx=\"12\" cy=\"12\" r=\"8.4\"/><path d=\"m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z\"/>",
  profile: "<circle cx=\"12\" cy=\"7.9\" r=\"3.7\"/><path d=\"M5.2 20.4v-1a4.4 4.4 0 0 1 4.4-4.4h4.8a4.4 4.4 0 0 1 4.4 4.4v1\"/>",
  settings: "<circle cx=\"12\" cy=\"12\" r=\"3.2\"/><path d=\"M12 3.2 13.9 5l2.4-.6 1 2.3 2.3 1-.6 2.4 1.8 1.9-1.8 1.9.6 2.4-2.3 1-1 2.3-2.4-.6-1.9 1.8-1.9-1.8-2.4.6-1-2.3-2.3-1 .6-2.4L3.2 12 5 10.1l-.6-2.4 2.3-1 1-2.3 2.4.6z\"/>",
  notifications: "<path d=\"M6.8 10.6a5.2 5.2 0 0 1 10.4 0c0 3.2.9 4.8 1.5 5.6.3.4 0 .9-.4.9H5.7c-.5 0-.7-.5-.4-.9.6-.8 1.5-2.4 1.5-5.6z\"/><path d=\"M10.2 19.8a2 2 0 0 0 3.6 0\"/>",
  done: "<path d=\"m5.8 12.6 4 4.1 8.4-9\"/>",
  add: "<path d=\"M12 6v12M6 12h12\"/>",
  skip: "<path d=\"M6.4 12h11.2\"/>",
  missedDay: "<path d=\"M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4\"/>",
  inProgress: "<circle cx=\"12\" cy=\"12\" r=\"8.2\"/><path d=\"M12 7.4V12l3.2 1.9\"/>",
  trend: "<path d=\"M4 15.6 9.6 10l3.4 3.4L20 6.8\"/><path d=\"M15.2 6.8H20v4.8\"/>",
  warning: "<path d=\"M12 3.9 21 18.9H3z\"/><path d=\"M12 9.6v3.9\"/><circle cx=\"12\" cy=\"16.2\" r=\"1.05\" fill=\"currentColor\" stroke=\"none\"/>",
  chevron: "<path d=\"m9.8 6 6 6-6 6\"/>",
};

export const iconNames = Object.keys(iconPaths);
