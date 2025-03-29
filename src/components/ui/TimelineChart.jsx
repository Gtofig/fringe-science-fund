import { useState } from 'react';
import { motion } from 'framer-motion';
import { discoveries } from '@/data/discoveries.js';

const TimelineChart = () => {
  const [hoveredDiscovery, setHoveredDiscovery] = useState(null);

  // Constants for visualization with updated values
  const startYear = 1780; // Updated start year
  const endYear = 2025;
  const timespan = endYear - startYear;
  const minYearDistance = 10; // Increased from 5 to 10
  const rowHeight = 40; // Increased from 30 to 40

  // Function to assign rows to discoveries to prevent overlap
  const assignRows = (discoveries, minDistance) => {
    // Sort discoveries by year
    const sortedDiscoveries = [...discoveries].sort((a, b) => a.Year - b.Year);

    // Create a new array with row assignments
    const result = [];

    // For each discovery, find an appropriate row
    for (const discovery of sortedDiscoveries) {
      let row = 0;
      let placed = false;

      // Try each row until finding one without overlap
      while (!placed) {
        // Check if this discovery would overlap with any already placed in this row
        const overlapsInThisRow = result.some(
          item => item.row === row && Math.abs(item.Year - discovery.Year) < minDistance
        );

        if (!overlapsInThisRow) {
          // No overlap, place it in this row
          result.push({ ...discovery, row });
          placed = true;
        } else {
          // Try next row
          row++;
        }
      }
    }

    return result;
  };

  // Assign rows to discoveries
  const discoveryData = assignRows(discoveries, minYearDistance);

  // Calculate the maximum row for spacing
  const maxRow = Math.max(...discoveryData.map(d => d.row));

  // Styling for the tooltip
  const tooltipStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    maxWidth: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    pointerEvents: 'none',
    transform: 'translate(-50%, -100%)',
    marginTop: '-10px',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  };

  // Generate discipline colors for consistency
  const disciplines = [...new Set(discoveryData.map(d => d.Discipline))];
  const disciplineColors = {};
  const colors = [
    '#4f46e5', // indigo
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16', // lime
    '#f97316', // orange
    '#14b8a6', // teal
    '#8b5cf6', // violet
    '#ef4444', // red
    '#10b981', // emerald
    '#f59e0b', // amber
  ];

  disciplines.forEach((discipline, index) => {
    disciplineColors[discipline] = colors[index % colors.length];
  });

  return (
    <motion.div
      className="w-full mt-10 mb-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h3 className="text-center text-xl font-semibold mb-4 dark:text-white text-space-dark">
        Paradigm-Shifting Scientific Discoveries (1780-Present)
      </h3>

      {/* Timeline container with height adjusted for maximum row */}
      <div className="w-full relative" style={{ height: `${(maxRow + 2) * rowHeight + 40}px` }}>
        {/* Timeline base line at the top */}
        <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 absolute top-0">
          {/* Year markers - updated to remove 1600, 1700 and add 2025 */}
          {[1800, 1850, 1900, 1950, 2000, 2025].map(year => (
            <div
              key={year}
              className="absolute"
              style={{
                left: `${((year - startYear) / timespan) * 100}%`,
                top: '0',
                transform: 'translateX(-50%)',
              }}
            >
              <div className="h-3 w-1 bg-gray-400 dark:bg-gray-500 mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{year}</div>
            </div>
          ))}

          {/* Discovery points with vertical staggering */}
          {discoveryData.map((discovery, index) => {
            const year = discovery.Year;
            const horizontalPosition = ((year - startYear) / timespan) * 100;
            const verticalPosition = (discovery.row + 1) * rowHeight;
            const color = disciplineColors[discovery.Discipline];

            return (
              <div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  left: `${horizontalPosition}%`,
                  top: verticalPosition,
                  transform: 'translate(-50%, 0)',
                }}
                onMouseEnter={() =>
                  setHoveredDiscovery({
                    ...discovery,
                    x: horizontalPosition,
                    y: verticalPosition,
                  })
                }
                onMouseLeave={() => setHoveredDiscovery(null)}
              >
                {/* Vertical connector line from timeline to dot */}
                <div
                  className="absolute w-px bg-gray-300 dark:bg-gray-600"
                  style={{
                    height: verticalPosition,
                    top: -verticalPosition,
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                ></div>

                {/* The discovery dot */}
                <div
                  className="h-5 w-5 rounded-full transition-transform duration-300 hover:scale-150 relative z-10"
                  style={{
                    backgroundColor: color,
                    transform:
                      hoveredDiscovery?.Year === year &&
                      hoveredDiscovery?.Discovery === discovery.Discovery
                        ? 'scale(1.5)'
                        : 'scale(1)',
                    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.5)',
                  }}
                ></div>

                {/* Small year label below dot */}
                <div
                  className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {year}
                </div>
              </div>
            );
          })}

          {/* Tooltip for hovered discovery */}
          {hoveredDiscovery && (
            <div
              style={{
                ...tooltipStyle,
                left: `${hoveredDiscovery.x}%`,
                top: hoveredDiscovery.y - 15,
              }}
            >
              <div className="font-bold">{hoveredDiscovery.Discovery}</div>
              <div>
                <span style={{ color: disciplineColors[hoveredDiscovery.Discipline] }}>
                  {hoveredDiscovery.Discipline}
                </span>{' '}
                • {hoveredDiscovery.Year}
              </div>
              <div className="mt-1">{hoveredDiscovery['Scientist(s)']}</div>
              <div className="text-gray-300 text-xs mt-1">
                Challenged: {hoveredDiscovery['Previous Paradigm (challenged/overturned)']}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Caption highlighting the trend */}
      <motion.div
        className="text-center mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p>Notice how paradigm-shifting discoveries stop after 1970.</p>
      </motion.div>
    </motion.div>
  );
};

export default TimelineChart;
