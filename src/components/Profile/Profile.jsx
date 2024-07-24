import clsx from "clsx";
import css from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={clsx(css.card)}>
      <div className={clsx(css.user)}>
        <img src={props.image} alt="User avatar" className={clsx(css.avatar)} />
        <p className={clsx(css.name)}>{props.name}</p>
        <p className={clsx(css.tag)}>@{props.tag}</p>
        <p className={clsx(css.location)}>{props.location}</p>
      </div>

      <ul className={clsx(css.info)}>
        <li className={clsx(css.item)}>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.quantity)}>{props.stats.followers}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.quantity)}>{props.stats.views}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.quantity)}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
