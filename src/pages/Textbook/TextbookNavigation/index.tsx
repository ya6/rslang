import React from 'react';
import { IUnit } from '../../../types/types';
import NavigationItem from './NavigationItem';
import styles from './styles.module.scss';
import { difficultWordsUnit } from '../../../data/constants';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../router';
import CustomSwiper from '../../../components/ui/Swiper';
import Container from '../../../components/Container';


const TextbookNavigation = () => {
  const { units } = useAppSelector((state) => state.textbook);

  const { isAuth } = useAppSelector((state) => state.auth);
  const slides: JSX.Element[] = units.map((u) => <NavigationItem key={u.id} item={u} path={`${RouteNames.UNITS}/${u.id}`} />);
  if (isAuth) {
    slides.push(<NavigationItem item={difficultWordsUnit} path={`${RouteNames.USER_DICTIONATY}/${RouteNames.DIFFICULT_WORDS}`} />);
  }
  return (
    <Container>
      <>
        <div className={styles['section__title']}>
          <h3 className={styles['section__title_text']}>Выбери раздел</h3>
          <span className={styles['section__title_icon']}>
            {
              <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="77" height="30" viewBox="0 0 77 30">
                <g>
                  <image width="77" height="30" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAeCAYAAABpE5PpAAAEMUlEQVRoge2Ze4hVVRTGf46WMyWmZvkaNSWfST7I1EINyVQ0kSxsQiyS3JFo/lGhUQSCJokk5aONhijhHyGRkKTlI3JMFKQaBx2o1HS0klSs66ucGVl3vhOnw73XwblPnQ8OZ+acfc/e+zvr8a11mtXNmsUtDe8T79659sAVvP87eqvo1mYsJR4C9ica0ERaclQBfXFuSHREE2nJ4P0x4BzwdXREE2mp8S3QDucGhUc1kZYa23V3SXhUizxb5I3AXnxPYCDQG+gAtAk9x7Lfb8AvwA/AT0BtA+cJSBuDcyV4f4kCJu1OYAowERgLtA/dqwFiIus2oDVQErp/FtgGbNZxOeks3lfhXDVQCowDPqcASesDvA5MA1rJYvYA5TpbxjsO/Bv5nRHXD3gwbjX1RJcB53HuY+B9vK9OMucO4HlgUkBaocS07sBG4DAwU8TMBjoBo4A3gS1ywShhhr+AfcAakdURmCCLexU4gnPLcK5tgt9+o/PjwYV8J605MF9k2Wa/12YHAKuA0zf4XHPhrbLYXsB6YF58HuemRsaW69wd57qS56R1AXYC7wIWgF+QSrfN1qVtFu+P4v1LwOC4xcEmnFsbD/z1938GTmn0aPKYtMEqYcz1vgQekDWkj6wovK8ARgJv6QXtwrl7NWqfzo+Sp6Q9IlHZGVgKPAn8npWZva/B+0XA+HgJBd/hXGmoBjVLzzvSBsmyLDMuAN5Q/MkuvN8uq7tLieC45h+Acy0C0koiWicX6Kp41VrZcElOV+P9QckTE8rv6Gox0L9IWu0i8EEOl3iHNJCp+dUK/rlHPXFPAT1Ca+lnhF0FLENMllvEcrBYI2qIsuXcnJHl3N3xAr2+4ghQLUtbrP/7BhXBCmA5MB34KMtLfRmYAZwEntVLzDT6K2YNxLleCg3dIuVWMvQJ2t1Wo/0DnADu19/ZwMPAbiWkx1QKZQLN9fyp8qgujZhjTWBpVnrMAT6UMn4vC4TdExeScDvwWoYIs2e/Ld1VGrpeo2ripM4mXs8oNMVUdl1WrA9QF++SeP9r+MNKkSzMCBwKVGZgEwGK1XYxsfgZ8HSGhGsrJZVTittHJR/+/K89lOzDSgqEuxy1KhPKVfyOCJUP6YS5ygYRdlAdhEwp/Zg8KK2Iits9aoV0UwegY4YIe0auMTlH2bpRSFQRTNSGrJOwVz2sdMBE4hfAc3KPJ4BjhUHT/5GItCuq/2xD9wEHgFcaWXKZRVWopjuiQvxQOjaQCyQjwoLlcIlNE3orgR/lVi0buM4idUh3q61sWugrYJj6YwWLVO3uP7RpS68L5a6fKh1vEaGVGndVJHVQ0T1CPfVOetZptak3FDJZAa73jaBWFcInykIvSvyW6bgeqqT91qmReFOgoR9WYtI7dph7mbo2NW8xz6zLXPaCLMpczz6VWYvHSLu5AFwD7u/9V73LPFIAAAAASUVORK5CYII=" />
                </g>
              </svg>
            }
          </span>
        </div>
        <div className={styles['swiper-container']}>
          <CustomSwiper slides={slides} />
        </div>
      </>
    </Container>
  );
};

export default TextbookNavigation;