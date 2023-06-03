interface ISearch {
  placeholder: string;
  onChoose: (tagName: string) => void;
  variants?: string[];
}
export default ISearch;
