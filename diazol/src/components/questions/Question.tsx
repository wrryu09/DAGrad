import SelectionBtn from "./SelectionBtn";
import SelectionBtnGroup from "./SelectionBtnGroup";
import { fiveSelectionBtnContent } from "@/data";

type QuestionProps = {
  title: string;
  content: string;
  currentSelection: number;
  handleCurrentSelection: (selection: number) => void;
  MainBtnChildren: React.ReactNode;
};

const Question = ({
  title,
  content,
  currentSelection,
  handleCurrentSelection,
  MainBtnChildren,
}: QuestionProps) => {
  return (
    <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
      <div className="mt-10 px-8">
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>
        <p className="text-lg">{content}</p>

        <SelectionBtnGroup>
          {fiveSelectionBtnContent.map((obj) => {
            return (
              <SelectionBtn
                key={obj.content + obj.num}
                text={obj.content}
                selection={currentSelection}
                setSelection={handleCurrentSelection}
                num={obj.num}
              />
            );
          })}
        </SelectionBtnGroup>

        {/* MainBtn children 으로 받기 */}
        <div className="flex justify-center">{MainBtnChildren}</div>
      </div>
    </div>
  );
};

export default Question;
