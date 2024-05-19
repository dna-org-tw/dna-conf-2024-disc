import { Fragment } from "react";

export default function QuestionDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="mb-16 mt-10">
      <p className="text-white text-lg">
        {description
          ? description.split("\n").map((text) => (
              <Fragment key={text}>
                {text}
                <br />
              </Fragment>
            ))
          : "測試題目"}
      </p>
    </div>
  );
}
