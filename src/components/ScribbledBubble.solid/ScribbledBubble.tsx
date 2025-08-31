import { MatchError } from '@/utils/MatchError';
import {Dynamic} from 'solid-js/web';
import type {Component, JSX} from 'solid-js';
import classes from './ScribbledBubble.module.css';

export type ScribbledCurveVariant = 
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6';

export type ScribbledBubbleProps = {
    variant: ScribbledCurveVariant,
    children: JSX.Element,
};

const ScribbledCurveVariant1: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="-30 -20 650 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M57.8883 137.66C281.804 220.307 826.517 105.254 515.216 39.7883C-109.846 -91.6612 -62.6515 182.155 137.884 170.646" stroke="#FFE901" stroke-width="8"/>
            <path d="M62.8883 144.66C286.804 227.307 831.517 112.254 520.216 46.7883C-104.846 -84.6612 -57.6515 189.155 142.884 177.646" stroke="#66D575" stroke-width="8"/>
        </svg>
    );
};

const ScribbledCurveVariant2: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="0 0 600 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M64.9861 244C4.73861 137.046 -42.7431 -56.9491 249.31 22.6984C614.376 122.258 639.022 36.6948 557.709 174.81C492.659 285.303 160.132 200.426 2 144.177" stroke="#FFC943" stroke-width="8"/>
            <path d="M74.1231 227C16.6141 135.644 -28.7094 -30.0607 250.068 37.9715C598.541 123.012 622.067 49.9268 544.45 167.9C482.356 262.279 164.944 189.781 14 141.734" stroke="#3DADFF" stroke-width="8"/>
        </svg>
    );
};

const ScribbledCurveVariant3: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="-60 0 620 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 177.845C230.789 200.248 655.346 220.115 515.268 120.364C340.169 -4.32604 452.598 110.341 198.423 21.3194C-55.7523 -67.7026 9.87596 215.991 114.774 204.669" stroke="#024D8C" stroke-width="8"/>
            <path d="M11 191.439C240.789 214.177 665.346 234.341 525.268 133.1C350.169 6.54969 462.598 122.929 208.423 32.5779C-45.7523 -57.7728 19.876 230.155 124.774 218.664" stroke="#F24822" stroke-width="8"/>
        </svg>
    );
};

const ScribbledCurveVariant4: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="-15 0 450 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M176.649 230C108.745 224.663 -19.8976 196.579 8.76761 126.943C44.5991 39.8974 75.9203 -21.2382 199.451 14.2787C322.982 49.7955 475.579 54.1624 392.139 157.802C325.387 240.713 103.567 208.263 1 181.674" stroke="#FFE901" stroke-width="8"/>
            <path d="M182.919 239C114.524 233.993 -15.0486 207.65 13.8238 142.327C49.9142 60.6737 81.4619 3.32522 205.886 36.6419C330.31 69.9586 484.01 74.055 399.967 171.274C332.732 249.05 109.308 218.609 6 193.667" stroke="#FF92AA" stroke-width="8"/>
        </svg>
    );
};

const ScribbledCurveVariant5: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="-50 -10 780 346"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M281.192 330C172.873 322.301 -32.3354 281.791 13.3907 181.342C70.5484 55.7812 120.511 -32.4056 317.565 18.8267C514.619 70.0591 758.039 76.3581 624.938 225.856C518.457 345.454 164.612 298.645 1 260.29" stroke="#024D8C" stroke-width="8"/>
            <path d="M293.616 304C185.132 297.246 -20.3857 261.706 25.4095 173.583C82.6535 63.4277 132.692 -13.9386 330.044 31.0075C527.395 75.9536 771.183 81.4798 637.88 212.634C531.238 317.558 176.859 276.492 13 242.844" stroke="#FCC6AD" stroke-width="8"/>
        </svg>

    );
};

const ScribbledCurveVariant6: Component = () => {
    return (
        <svg
            class={[classes.svg].join(' ')}
            preserveAspectRatio="none"
            aria-hidden="true"
            viewBox="-50 -30 950 446"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M878.112 324.723C586.119 348.148 2.13373 366.889 2.13373 254.445C2.13373 113.891 61.0898 49.4352 263.464 70.2273C381.933 39.8708 644.796 -2.62823 748.492 70.2273C878.112 161.297 1068.78 152.148 547.791 395" stroke="black" stroke-width="4"/>
            <path d="M879.112 296.723C587.119 320.148 3.13373 338.889 3.13373 226.445C3.13373 85.8907 62.0898 21.4352 264.464 42.2273C382.933 11.8708 645.796 -30.6282 749.492 42.2273C879.112 133.297 1069.78 124.148 548.791 367" stroke="#EE804D" stroke-width="4"/>
            <path d="M891.112 337.723C599.119 361.148 15.1337 379.889 15.1337 267.445C15.1337 126.891 74.0898 62.4352 276.464 83.2273C394.933 52.8708 657.796 10.3718 761.492 83.2273C891.112 174.297 1081.78 165.148 560.791 408" stroke="#FFE901" stroke-width="4"/>
        </svg>

    );
};

const resolveVariant = (variant: ScribbledCurveVariant) => {
    switch (variant) {
        case '1':
            return ScribbledCurveVariant1;
        case '2':
            return ScribbledCurveVariant2;
        case '3':
            return ScribbledCurveVariant3;
        case '4':
            return ScribbledCurveVariant4;
        case '5':
            return ScribbledCurveVariant5;
        case '6':
            return ScribbledCurveVariant6;
        default:
            throw new MatchError(variant);
    }
};

const resolveVariantClass = (variant: ScribbledCurveVariant) => {
    switch (variant) {
        case '1':
            return classes.type1;
        case '2':
            return classes.type2;
        case '3':
            return classes.type3;
        case '4':
            return classes.type4;
        case '5':
            return classes.type5;
        case '6':
            return classes.type6;
        default:
            throw new MatchError(variant);
    }
};

export const ScribbledBubble: Component<ScribbledBubbleProps> = (props) => {
    return (
        <div class={[classes.root, resolveVariantClass(props.variant)].join(' ')}>
            <div class={classes.svgWrapper}>
                <Dynamic component={resolveVariant(props.variant)} />
                {props.children}
            </div>
        </div>
    );
}
