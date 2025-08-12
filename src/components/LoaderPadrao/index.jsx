"use client"
import { useBrand, useLoader } from '../../context';
import styles from './styles.module.css';

const LoaderPadrao = () => {
  const { isLoading } = useLoader();
  const { brandName, brandKey, assets } = useBrand();

  if (!isLoading) return null;

    return (
      <div className={styles.loaderOverlay}>
        <div className={styles.loaderContet}>
          {
            brandKey == 'drhoje' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <defs>
                  <linearGradient id="background" x1="5.27" y1="5.27" x2="122.73" y2="122.73" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#278eff" />
                    <stop offset="1" stopColor="#0439d8" />
                  </linearGradient>

                  <linearGradient id="lightRay" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="35%" stopColor="white" stopOpacity="0" />
                    <stop offset="45%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.6" />
                    <stop offset="55%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="65%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <clipPath id="roundedClip">
                  <rect x="0" y="0" width="128" height="128" rx="18" ry="18" fill="url(#background)"/>
                </clipPath>

                <rect
                  x="0"
                  y="0"
                  width="128"
                  height="128"
                  rx="18"
                  ry="18"
                  fill="url(#background)"
                />

                <g>
                  <path
                    d="M47.8,64.19c2.17-2.17,4.53-4.53,6.99-7,1.86,1.96,3.81,4.03,5.81,6.14,5.62-5.66,10.94-11.02,16.13-16.24,2.62,2.62,5,5.01,7.25,7.26-7.59,7.59-15.38,15.38-23.04,23.03-4.22-4.24-8.67-8.71-13.13-13.19Z"
                    fill="#fff"
                  />
                  <path
                    d="M84.48,26.55v12.5h8.43v26.63c0,7.22-2.81,14.01-7.92,19.11-5.11,5.1-11.89,7.92-19.11,7.92s-14.01-2.81-19.11-7.92c-5.11-5.11-7.92-11.89-7.92-19.11v-26.63h8.23v-12.5h-20.73v39.13c0,21.83,17.7,39.53,39.53,39.53,10.92,0,20.8-4.42,27.95-11.58,7.15-7.15,11.58-17.04,11.58-27.95V26.55h-20.93Z"
                    fill="#fff"
                  />
                </g>

                <g clipPath="url(#roundedClip)">
                  <rect
                    x="-150"
                    y="-150"
                    width="150"
                    height="150"
                    fill="url(#lightRay)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="-150 -150"
                      to="300 300"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </svg>
            ) : (
              <img src={assets.logo} alt={`Logo ${brandName}`} className={styles.loaderLogo}/>
            )
          }
        </div>
      </div>
    );
};

export default LoaderPadrao;
