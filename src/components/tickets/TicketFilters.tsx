import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface TicketFiltersProps {
  show: boolean;
  filters: {
    days: string[];
    zones: string[];
    categories: string[];
    artists: string[];
    availability: string[];
    priceRange: string[];
  };
  onFiltersChange: (filters: any) => void;
}

export const TicketFilters = ({ show, filters, onFiltersChange }: TicketFiltersProps) => {
  const [matchingOptions, setMatchingOptions] = useState(24);

  const filterCategories = [
    {
      title: "Attendance Days",
      key: "days",
      options: [
        { value: "friday", label: "Friday Practice" },
        { value: "saturday", label: "Saturday Qualifying" },
        { value: "sunday", label: "Sunday Race" },
        { value: "3-day", label: "3-Day Package" }
      ]
    },
    {
      title: "Zone Access",
      key: "zones",
      options: [
        { value: "zone1", label: "Zone 1 - Start/Finish" },
        { value: "zone2", label: "Zone 2 - Turn 7-14" },
        { value: "zone3", label: "Zone 3 - Marina Bay" },
        { value: "zone4", label: "Zone 4 - Singapore Flyer" }
      ]
    },
    {
      title: "Category",
      key: "categories",
      options: [
        { value: "grandstand", label: "Grandstands" },
        { value: "walkabout", label: "Walkabouts" },
        { value: "hospitality", label: "Hospitality" }
      ]
    },
    {
      title: "Entertainment",
      key: "artists",
      options: [
        { value: "paddock-club", label: "Padang Stage Access" },
        { value: "village-stage", label: "Village Stage Access" },
        { value: "bay-stage", label: "Bay Stage Access" }
      ]
    },
    {
      title: "Price Range (SGD)",
      key: "priceRange",
      options: [
        { value: "under-200", label: "Under $200" },
        { value: "200-500", label: "$200 - $500" },
        { value: "500-1000", label: "$500 - $1,000" },
        { value: "1000-3000", label: "$1,000 - $3,000" },
        { value: "over-3000", label: "Over $3,000" }
      ]
    },
    {
      title: "Availability",
      key: "availability",
      options: [
        { value: "in-stock", label: "In Stock" },
        { value: "low", label: "Low Availability" },
        { value: "sold-out", label: "Sold Out (Waitlist)" }
      ]
    }
  ];

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[category as keyof typeof filters] = [...filters[category as keyof typeof filters], value];
    } else {
      newFilters[category as keyof typeof filters] = filters[category as keyof typeof filters].filter(
        (item: string) => item !== value
      );
    }
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    onFiltersChange({
      days: [],
      zones: [],
      categories: [],
      artists: [],
      availability: [],
      priceRange: []
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  if (!show) return null;

  return (
    <div className="bg-card border-b border-border sticky top-16 z-40 animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Filter Tickets</h3>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {matchingOptions} matching options
            </span>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {filterCategories.map((category) => (
            <div key={category.key} className="space-y-3">
              <h4 className="font-medium text-foreground">{category.title}</h4>
              <div className="space-y-2">
                {category.options.map((option) => {
                  const isChecked = filters[category.key as keyof typeof filters].includes(option.value);
                  return (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${category.key}-${option.value}`}
                        checked={isChecked}
                        onCheckedChange={(checked) =>
                          handleFilterChange(category.key, option.value, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`${category.key}-${option.value}`}
                        className="text-sm text-foreground cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {hasActiveFilters && (
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([category, values]) =>
                values.map((value: string) => {
                  const categoryData = filterCategories.find(c => c.key === category);
                  const optionData = categoryData?.options.find(o => o.value === value);
                  return (
                    <span
                      key={`${category}-${value}`}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {optionData?.label}
                      <button
                        onClick={() => handleFilterChange(category, value, false)}
                        className="hover:bg-primary/20 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};