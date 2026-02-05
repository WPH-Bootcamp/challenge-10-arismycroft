type SearchBarProps = {
  value: string;
  onSearch: (value: string) => void;
};

export default function SearchBar({ value, onSearch }: SearchBarProps) {
  return (
    <input
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search articles..."
      className="w-full h-12 rounded-lg border px-4"
    />
  );
}