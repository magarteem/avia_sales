import s from "./didYouPlantMoreInput.module.css";

export const DidYouPlantMoreInput = () => {
  return (
    <div className={s.plantMoreInput}>
      <span>$ </span>
      <input type="text" placeholder="Specify the amount" />
    </div>
  );
};
