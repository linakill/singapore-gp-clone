import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin, Info, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CircuitMapProps {
  highlightedZone: string | null;
  onZoneHover: (zone: string | null) => void;
  onZoneClick: (zone: string) => void;
}

// Singapore GP Circuit - Marina Bay Street Circuit exact layout with ticket locations
const ticketLocations = [
  // Bay Grandstand (Pink/Magenta dots)
  { id: "bay-grandstand", name: "Bay Grandstand Trio", category: "grandstand", color: "#E91E63", x: 22, y: 38, zone: "zone1", viewAngle: 45, viewRadius: 6 },
  
  // Turn 1 Area (Orange dots)
  { id: "turn1-orange", name: "Turn 1 Grandstand", category: "grandstand", color: "#FF9800", x: 18, y: 16, zone: "zone1", viewAngle: 135, viewRadius: 7 },
  { id: "singapore-flyer", name: "Singapore Flyer", category: "hospitality", color: "#FF9800", x: 75, y: 12, zone: "zone3", viewAngle: 180, viewRadius: 8 },
  
  // Promenade Station (Pink/Magenta dots)  
  { id: "promenade", name: "Promenade Station", category: "grandstand", color: "#E91E63", x: 65, y: 32, zone: "zone2", viewAngle: 90, viewRadius: 5 },
  { id: "promenade-2", name: "Promenade Upper", category: "grandstand", color: "#E91E63", x: 68, y: 35, zone: "zone2", viewAngle: 90, viewRadius: 5 },
  { id: "promenade-3", name: "Promenade Lower", category: "grandstand", color: "#E91E63", x: 69, y: 42, zone: "zone2", viewAngle: 90, viewRadius: 5 },
  { id: "promenade-4", name: "Promenade Center", category: "grandstand", color: "#E91E63", x: 70, y: 48, zone: "zone2", viewAngle: 90, viewRadius: 5 },
  
  // Walkabout areas (Green dots)
  { id: "walkabout-1", name: "Zone 1 Walkabout", category: "walkabout", color: "#4CAF50", x: 32, y: 28, zone: "zone1", viewAngle: 0, viewRadius: 4 },
  { id: "walkabout-2", name: "Zone 4 Walkabout", category: "walkabout", color: "#4CAF50", x: 52, y: 45, zone: "zone4", viewAngle: 270, viewRadius: 4 },
  
  // Premium locations (Blue/Teal dots)
  { id: "esplanade", name: "Esplanade Station", category: "hospitality", color: "#00BCD4", x: 28, y: 20, zone: "zone1", viewAngle: 45, viewRadius: 6 },
  { id: "cityHall", name: "City Hall Station", category: "grandstand", color: "#00BCD4", x: 34, y: 9.5, zone: "zone1", viewAngle: 180, viewRadius: 5.5 },
  
  // Additional premium spots
  { id: "raffles", name: "Raffles Station", category: "hospitality", color: "#FF5722", x: 42, y: 14, zone: "zone2", viewAngle: 225, viewRadius: 6.5 },
];

// Marina Bay Street Circuit track exact layout
const turns = [
  { number: 1, x: 18, y: 16, name: "Turn 1" },
  { number: 2, x: 20, y: 14, name: "Turn 2" },
  { number: 3, x: 25, y: 12, name: "Turn 3" },
  { number: 4, x: 32, y: 10.5, name: "Turn 4" },
  { number: 5, x: 42, y: 14, name: "Turn 5" },
  { number: 7, x: 52, y: 12, name: "Turn 7" },
  { number: 8, x: 65, y: 15, name: "Turn 8" },
  { number: 10, x: 75, y: 20, name: "Turn 10" },
  { number: 13, x: 72, y: 32, name: "Turn 13" },
  { number: 14, x: 69, y: 42, name: "Turn 14" },
  { number: 17, x: 58, y: 54, name: "Turn 17" },
  { number: 18, x: 52, y: 52, name: "Turn 18" },
  { number: 19, x: 45, y: 50, name: "Turn 19" },
  { number: 20, x: 38, y: 48, name: "Turn 20" },
  { number: 21, x: 32, y: 45, name: "Turn 21" },
  { number: 22, x: 28, y: 42, name: "Turn 22" },
  { number: 23, x: 24, y: 38, name: "Turn 23" },
];

// Landmarks
const landmarks = [
  { name: "Singapore River", x: 30, y: 35, type: "water" },
  { name: "Marina Bay", x: 50, y: 50, type: "water" },
  { name: "Marina Bay Sands", x: 60, y: 40, type: "building" },
  { name: "Singapore Flyer", x: 75, y: 12, type: "landmark" },
  { name: "Esplanade", x: 28, y: 20, type: "building" },
  { name: "Raffles Place", x: 42, y: 14, type: "building" },
];

export const CircuitMap = ({ highlightedZone, onZoneHover, onZoneClick }: CircuitMapProps) => {
  const [showLegend, setShowLegend] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.1;

  // Zoom and Pan handlers
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newZoom = Math.min(Math.max(zoom + delta * ZOOM_STEP, MIN_ZOOM), MAX_ZOOM);
    setZoom(newZoom);
  }, [zoom]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (zoom < MAX_ZOOM) {
      setZoom(Math.min(zoom * 1.5, MAX_ZOOM));
    } else {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [zoom]);

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedZone(null);
  };

  const handleZoneClick = (zoneId: string) => {
    setSelectedZone(selectedZone === zoneId ? null : zoneId);
    onZoneClick(zoneId);
  };

  // Touch handlers for mobile pinch zoom
  const [initialTouches, setInitialTouches] = useState<React.TouchList | null>(null);
  const [initialZoom, setInitialZoom] = useState(1);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setInitialTouches(e.touches);
      setInitialZoom(zoom);
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - pan.x, 
        y: e.touches[0].clientY - pan.y 
      });
    }
  }, [zoom, pan]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && initialTouches) {
      const currentDistance = Math.sqrt(
        Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) +
        Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
      );
      const initialDistance = Math.sqrt(
        Math.pow(initialTouches[0].clientX - initialTouches[1].clientX, 2) +
        Math.pow(initialTouches[0].clientY - initialTouches[1].clientY, 2)
      );
      const scale = currentDistance / initialDistance;
      const newZoom = Math.min(Math.max(initialZoom * scale, MIN_ZOOM), MAX_ZOOM);
      setZoom(newZoom);
    } else if (e.touches.length === 1 && isDragging) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  }, [initialTouches, initialZoom, isDragging, dragStart]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setInitialTouches(null);
  }, []);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    mapElement.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      mapElement.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleWheel, handleMouseMove, handleMouseUp]);

  return (
    <div className="bg-card rounded-lg p-6 sticky top-32">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">Marina Bay Street Circuit</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setZoom(Math.min(zoom + ZOOM_STEP * 3, MAX_ZOOM))}
            disabled={zoom >= MAX_ZOOM}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setZoom(Math.max(zoom - ZOOM_STEP * 3, MIN_ZOOM))}
            disabled={zoom <= MIN_ZOOM}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetView}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Circuit Map SVG */}
      <div 
        ref={mapRef}
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden aspect-square cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          className="w-full h-full transition-transform duration-200 ease-out"
          style={{ 
            filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.3))",
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
          }}
        >
          {/* Track outline (runoff areas) */}
          <path
            d="M15,14 L35,8 L45,12 L55,10 L70,13 L78,18 L80,25 L78,35 L75,45 L70,52 L60,56 L50,54 L40,52 L30,48 L25,42 L20,35 L15,25 Z"
            fill="hsl(var(--muted))"
            fillOpacity="0.2"
            stroke="none"
          />
          
          {/* Main track path - Marina Bay Street Circuit exact layout */}
          <path
            d="M18,16 L34,9.5 L42,14 L52,12 L65,15 L75,12 L78,20 L75,32 L72,42 L69,48 L60,54 L52,52 L45,50 L38,48 L32,45 L28,42 L24,38 L22,32 L20,25 L18,20 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse-glow"
          />
          
          {/* Track centerline */}
          <path
            d="M18,16 L34,9.5 L42,14 L52,12 L65,15 L75,12 L78,20 L75,32 L72,42 L69,48 L60,54 L52,52 L45,50 L38,48 L32,45 L28,42 L24,38 L22,32 L20,25 L18,20 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="1,2"
            opacity="0.6"
          />
          
          {/* Start/Finish Line */}
          <line
            x1="18"
            y1="14"
            x2="20"
            y2="18"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          
          {/* Ticket Location Hotspots */}
          {ticketLocations.map((location) => (
            <g key={location.id}>
              {/* Viewing area highlight when hovered */}
              {(highlightedZone === location.zone || selectedZone === location.zone) && (
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={location.viewRadius}
                  fill={location.color}
                  fillOpacity="0.15"
                  stroke={location.color}
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  className="animate-fade-in"
                />
              )}
              
              {/* Ticket location dot */}
              <circle
                cx={location.x}
                cy={location.y}
                r="2.5"
                fill={location.color}
                stroke="white"
                strokeWidth="1"
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:scale-125 hover:drop-shadow-glow",
                  (highlightedZone === location.zone || selectedZone === location.zone) && "animate-pulse scale-125"
                )}
                onMouseEnter={() => onZoneHover(location.zone)}
                onMouseLeave={() => onZoneHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoneClick(location.zone);
                }}
              />
              
              {/* Location tooltip */}
              {(highlightedZone === location.zone || selectedZone === location.zone) && (
                <g className="animate-fade-in">
                  <rect
                    x={location.x - 15}
                    y={location.y - 20}
                    width="30"
                    height="12"
                    fill="hsl(var(--popover))"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    rx="2"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                  />
                  <text
                    x={location.x}
                    y={location.y - 11}
                    textAnchor="middle"
                    className="text-xs font-semibold"
                    fill="hsl(var(--popover-foreground))"
                    fontSize="0.6em"
                  >
                    {location.name}
                  </text>
                </g>
              )}
            </g>
          ))}
          
          {/* Turn Numbers */}
          {turns.map((turn) => (
            <g key={turn.number}>
              <circle
                cx={turn.x}
                cy={turn.y}
                r="2"
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
              <text
                x={turn.x}
                y={turn.y + 0.5}
                textAnchor="middle"
                className="text-xs font-bold fill-white"
                fontSize="0.6em"
              >
                {turn.number}
              </text>
            </g>
          ))}
          
          {/* Landmarks */}
          <g opacity="0.7">
            <text x="75" y="8" textAnchor="middle" className="text-xs fill-white font-light" fontSize="0.5em">Singapore Flyer</text>
            <text x="60" y="38" textAnchor="middle" className="text-xs fill-white font-light" fontSize="0.5em">Marina Bay Sands</text>
            <text x="30" y="33" textAnchor="middle" className="text-xs fill-white font-light" fontSize="0.5em">Singapore River</text>
            <text x="50" y="52" textAnchor="middle" className="text-xs fill-white font-light" fontSize="0.5em">Marina Bay</text>
          </g>
          
          {/* Zone boundaries - subtle overlay */}
          <g opacity="0.1">
            <rect x="10" y="40" width="25" height="20" fill="hsl(var(--accent))" rx="2" />
            <rect x="65" y="20" width="25" height="20" fill="hsl(var(--accent))" rx="2" />
            <rect x="80" y="55" width="15" height="20" fill="hsl(var(--accent))" rx="2" />
            <rect x="15" y="70" width="20" height="15" fill="hsl(var(--accent))" rx="2" />
          </g>
        </svg>
        
        {/* Zoom indicator */}
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {Math.round(zoom * 100)}%
        </div>
        
        {/* Instructions overlay */}
        {zoom === 1 && pan.x === 0 && pan.y === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-lg animate-fade-in">
              Scroll to zoom • Click & drag to pan • Double-click to reset
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="mt-4 space-y-3 animate-fade-in">
          <h4 className="font-medium text-foreground">Map Controls & Legend</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Ticket Zones</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span className="text-muted-foreground">Turn Numbers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-primary"></div>
              <span className="text-muted-foreground">Race Track</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 border-t-2 border-dashed border-white"></div>
              <span className="text-muted-foreground">Start/Finish</span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Desktop:</strong> Scroll to zoom • Click & drag to pan • Double-click to reset</p>
            <p><strong>Mobile:</strong> Pinch to zoom • Drag to pan • Tap zones to select</p>
          </div>
          
          {/* Zone Details */}
          <div className="pt-2 border-t border-border">
            <h5 className="text-sm font-medium text-foreground mb-2">Ticket Locations</h5>
            <div className="space-y-1">
              {/* Group locations by category */}
              {Array.from(new Set(ticketLocations.map(loc => loc.category))).map((category) => (
                <div key={category} className="space-y-1">
                  <h6 className="text-xs font-medium text-foreground capitalize">{category}s</h6>
                  {ticketLocations
                    .filter(loc => loc.category === category)
                    .map((location) => (
                    <div 
                      key={location.id}
                      className={cn(
                        "text-xs p-2 rounded cursor-pointer transition-colors ml-2",
                        (highlightedZone === location.zone || selectedZone === location.zone)
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                      onMouseEnter={() => onZoneHover(location.zone)}
                      onMouseLeave={() => onZoneHover(null)}
                      onClick={() => handleZoneClick(location.zone)}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: location.color }}
                        ></div>
                        <span className="font-medium">{location.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};