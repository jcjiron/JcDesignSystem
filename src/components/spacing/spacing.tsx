import { css } from 'styled-components'

const Variables = css`
    /* Variables for margin and padding */
    --spacing-0: 0;
    --spacing-0_5: 2px;
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-7: 28px;
    --spacing-8: 32px;
    --spacing-9: 36px;
    --spacing-10: 40px;
`

export const Margin = css`
    ${Variables}
    .m-0 {
        margin: var(--spacing-0) !important;
    }
    .m-0\.5 {
        margin: var(--spacing-0_5) !important;
    }
    .m-1 {
        margin: var(--spacing-1) !important;
    }
    .m-2 {
        margin: var(--spacing-2) !important;
    }
    .m-3 {
        margin: var(--spacing-3) !important;
    }
    .m-4 {
        margin: var(--spacing-4) !important;
    }
    .m-5 {
        margin: var(--spacing-5) !important;
    }
    .m-6 {
        margin: var(--spacing-6) !important;
    }
    .m-7 {
        margin: var(--spacing-7) !important;
    }
    .m-8 {
        margin: var(--spacing-8) !important;
    }
    .m-9 {
        margin: var(--spacing-9) !important;
    }
    .m-10 {
        margin: var(--spacing-10) !important;
    }

    /* :: margin-left :: */
    .ml-0 {
        margin-left: var(--spacing-0) !important;
    }
    .ml-0\.5 {
        margin-left: var(--spacing-0_5) !important;
    }
    .ml-1 {
        margin-left: var(--spacing-1) !important;
    }
    .ml-2 {
        margin-left: var(--spacing-2) !important;
    }
    .ml-3 {
        margin-left: var(--spacing-3) !important;
    }
    .ml-4 {
        margin-left: var(--spacing-4) !important;
    }
    .ml-5 {
        margin-left: var(--spacing-5) !important;
    }
    .ml-6 {
        margin-left: var(--spacing-6) !important;
    }
    .ml-7 {
        margin-left: var(--spacing-7) !important;
    }
    .ml-8 {
        margin-left: var(--spacing-8) !important;
    }
    .ml-9 {
        margin-left: var(--spacing-9) !important;
    }
    .ml-10 {
        margin-left: var(--spacing-10) !important;
    }

    /* :: margin-right :: */
    .mr-0 {
        margin-right: var(--spacing-0) !important;
    }
    .mr-0\.5 {
        margin-right: var(--spacing-0_5) !important;
    }
    .mr-1 {
        margin-right: var(--spacing-1) !important;
    }
    .mr-2 {
        margin-right: var(--spacing-2) !important;
    }
    .mr-3 {
        margin-right: var(--spacing-3) !important;
    }
    .mr-4 {
        margin-right: var(--spacing-4) !important;
    }
    .mr-5 {
        margin-right: var(--spacing-5) !important;
    }
    .mr-6 {
        margin-right: var(--spacing-6) !important;
    }
    .mr-7 {
        margin-right: var(--spacing-7) !important;
    }
    .mr-8 {
        margin-right: var(--spacing-8) !important;
    }
    .mr-9 {
        margin-right: var(--spacing-9) !important;
    }
    .mr-10 {
        margin-right: var(--spacing-10) !important;
    }

    /* :: margin-top :: */
    .mt-0 {
        margin-top: var(--spacing-0) !important;
    }
    .mt-0\.5 {
        margin-top: var(--spacing-0_5) !important;
    }
    .mt-1 {
        margin-top: var(--spacing-1) !important;
    }
    .mt-2 {
        margin-top: var(--spacing-2) !important;
    }
    .mt-3 {
        margin-top: var(--spacing-3) !important;
    }
    .mt-4 {
        margin-top: var(--spacing-4) !important;
    }
    .mt-5 {
        margin-top: var(--spacing-5) !important;
    }
    .mt-6 {
        margin-top: var(--spacing-6) !important;
    }
    .mt-7 {
        margin-top: var(--spacing-7) !important;
    }
    .mt-8 {
        margin-top: var(--spacing-8) !important;
    }
    .mt-9 {
        margin-top: var(--spacing-9) !important;
    }
    .mt-10 {
        margin-top: var(--spacing-10) !important;
    }

    /* :: margin-bottom :: */
    .mb-0 {
        margin-bottom: var(--spacing-0) !important;
    }
    .mb-0\.5 {
        margin-bottom: var(--spacing-0_5) !important;
    }
    .mb-1 {
        margin-bottom: var(--spacing-1) !important;
    }
    .mb-2 {
        margin-bottom: var(--spacing-2) !important;
    }
    .mb-3 {
        margin-bottom: var(--spacing-3) !important;
    }
    .mb-4 {
        margin-bottom: var(--spacing-4) !important;
    }
    .mb-5 {
        margin-bottom: var(--spacing-5) !important;
    }
    .mb-6 {
        margin-bottom: var(--spacing-6) !important;
    }
    .mb-7 {
        margin-bottom: var(--spacing-7) !important;
    }
    .mb-8 {
        margin-bottom: var(--spacing-8) !important;
    }
    .mb-9 {
        margin-bottom: var(--spacing-9) !important;
    }
    .mb-10 {
        margin-bottom: var(--spacing-10) !important;
    }

    /* :: margin x (left and right) :: */
    .mx-0 {
        margin-right: var(--spacing-0) !important;
        margin-left: var(--spacing-0) !important;
    }
    .mx-0\.5 {
        margin-right: var(--spacing-0_5) !important;
        margin-left: var(--spacing-0_5) !important;
    }
    .mx-1 {
        margin-right: var(--spacing-1) !important;
        margin-left: var(--spacing-1) !important;
    }
    .mx-2 {
        margin-right: var(--spacing-2) !important;
        margin-left: var(--spacing-2) !important;
    }
    .mx-3 {
        margin-right: var(--spacing-3) !important;
        margin-left: var(--spacing-3) !important;
    }
    .mx-4 {
        margin-right: var(--spacing-4) !important;
        margin-left: var(--spacing-4) !important;
    }
    .mx-5 {
        margin-right: var(--spacing-5) !important;
        margin-left: var(--spacing-5) !important;
    }
    .mx-6 {
        margin-right: var(--spacing-6) !important;
        margin-left: var(--spacing-6) !important;
    }
    .mx-7 {
        margin-right: var(--spacing-7) !important;
        margin-left: var(--spacing-7) !important;
    }
    .mx-8 {
        margin-right: var(--spacing-8) !important;
        margin-left: var(--spacing-8) !important;
    }
    .mx-9 {
        margin-right: var(--spacing-9) !important;
        margin-left: var(--spacing-9) !important;
    }
    .mx-10 {
        margin-right: var(--spacing-10) !important;
        margin-left: var(--spacing-10) !important;
    }

    /* :: margin y (top and bottom) :: */
    .my-0 {
        margin-top: var(--spacing-0) !important;
        margin-bottom: var(--spacing-0) !important;
    }
    .my-0\.5 {
        margin-top: var(--spacing-0_5) !important;
        margin-bottom: var(--spacing-0_5) !important;
    }
    .my-1 {
        margin-top: var(--spacing-1) !important;
        margin-bottom: var(--spacing-1) !important;
    }
    .my-2 {
        margin-top: var(--spacing-2) !important;
        margin-bottom: var(--spacing-2) !important;
    }
    .my-3 {
        margin-top: var(--spacing-3) !important;
        margin-bottom: var(--spacing-3) !important;
    }
    .my-4 {
        margin-top: var(--spacing-4) !important;
        margin-bottom: var(--spacing-4) !important;
    }
    .my-5 {
        margin-top: var(--spacing-5) !important;
        margin-bottom: var(--spacing-5) !important;
    }
    .my-6 {
        margin-top: var(--spacing-6) !important;
        margin-bottom: var(--spacing-6) !important;
    }
    .my-7 {
        margin-top: var(--spacing-7) !important;
        margin-bottom: var(--spacing-7) !important;
    }
    .my-8 {
        margin-top: var(--spacing-8) !important;
        margin-bottom: var(--spacing-8) !important;
    }
    .my-9 {
        margin-top: var(--spacing-9) !important;
        margin-bottom: var(--spacing-9) !important;
    }
    .my-10 {
        margin-top: var(--spacing-10) !important;
        margin-bottom: var(--spacing-10) !important;
    }
`

export const Padding = css`
    ${Variables}
    /* :: padding :: */
  .p-0 {
        padding: var(--spacing-0) !important;
    }
    .p-0\.5 {
        padding: var(--spacing-0_5) !important;
    }
    .p-1 {
        padding: var(--spacing-1) !important;
    }
    .p-2 {
        padding: var(--spacing-2) !important;
    }
    .p-3 {
        padding: var(--spacing-3) !important;
    }
    .p-4 {
        padding: var(--spacing-4) !important;
    }
    .p-5 {
        padding: var(--spacing-5) !important;
    }
    .p-6 {
        padding: var(--spacing-6) !important;
    }
    .p-7 {
        padding: var(--spacing-7) !important;
    }
    .p-8 {
        padding: var(--spacing-8) !important;
    }
    .p-9 {
        padding: var(--spacing-9) !important;
    }
    .p-10 {
        padding: var(--spacing-10) !important;
    }

    /* :: padding-left :: */
    .pl-0 {
        padding-left: var(--spacing-0) !important;
    }
    .pl-0\.5 {
        padding-left: var(--spacing-0_5) !important;
    }
    .pl-1 {
        padding-left: var(--spacing-1) !important;
    }
    .pl-2 {
        padding-left: var(--spacing-2) !important;
    }
    .pl-3 {
        padding-left: var(--spacing-3) !important;
    }
    .pl-4 {
        padding-left: var(--spacing-4) !important;
    }
    .pl-5 {
        padding-left: var(--spacing-5) !important;
    }
    .pl-6 {
        padding-left: var(--spacing-6) !important;
    }
    .pl-7 {
        padding-left: var(--spacing-7) !important;
    }
    .pl-8 {
        padding-left: var(--spacing-8) !important;
    }
    .pl-9 {
        padding-left: var(--spacing-9) !important;
    }
    .pl-10 {
        padding-left: var(--spacing-10) !important;
    }

    /* :: padding-right :: */
    .pr-0 {
        padding-right: var(--spacing-0) !important;
    }
    .pr-0\.5 {
        padding-right: var(--spacing-0_5) !important;
    }
    .pr-1 {
        padding-right: var(--spacing-1) !important;
    }
    .pr-2 {
        padding-right: var(--spacing-2) !important;
    }
    .pr-3 {
        padding-right: var(--spacing-3) !important;
    }
    .pr-4 {
        padding-right: var(--spacing-4) !important;
    }
    .pr-5 {
        padding-right: var(--spacing-5) !important;
    }
    .pr-6 {
        padding-right: var(--spacing-6) !important;
    }
    .pr-7 {
        padding-right: var(--spacing-7) !important;
    }
    .pr-8 {
        padding-right: var(--spacing-8) !important;
    }
    .pr-9 {
        padding-right: var(--spacing-9) !important;
    }
    .pr-10 {
        padding-right: var(--spacing-10) !important;
    }

    /* :: padding-top :: */
    .pt-0 {
        padding-top: var(--spacing-0) !important;
    }
    .pt-0\.5 {
        padding-top: var(--spacing-0_5) !important;
    }
    .pt-1 {
        padding-top: var(--spacing-1) !important;
    }
    .pt-2 {
        padding-top: var(--spacing-2) !important;
    }
    .pt-3 {
        padding-top: var(--spacing-3) !important;
    }
    .pt-4 {
        padding-top: var(--spacing-4) !important;
    }
    .pt-5 {
        padding-top: var(--spacing-5) !important;
    }
    .pt-6 {
        padding-top: var(--spacing-6) !important;
    }
    .pt-7 {
        padding-top: var(--spacing-7) !important;
    }
    .pt-8 {
        padding-top: var(--spacing-8) !important;
    }
    .pt-9 {
        padding-top: var(--spacing-9) !important;
    }
    .pt-10 {
        padding-top: var(--spacing-10) !important;
    }

    /* :: padding-bottom :: */
    .pb-0 {
        padding-bottom: var(--spacing-0) !important;
    }
    .pb-0\.5 {
        padding-bottom: var(--spacing-0_5) !important;
    }
    .pb-1 {
        padding-bottom: var(--spacing-1) !important;
    }
    .pb-2 {
        padding-bottom: var(--spacing-2) !important;
    }
    .pb-3 {
        padding-bottom: var(--spacing-3) !important;
    }
    .pb-4 {
        padding-bottom: var(--spacing-4) !important;
    }
    .pb-5 {
        padding-bottom: var(--spacing-5) !important;
    }
    .pb-6 {
        padding-bottom: var(--spacing-6) !important;
    }
    .pb-7 {
        padding-bottom: var(--spacing-7) !important;
    }
    .pb-8 {
        padding-bottom: var(--spacing-8) !important;
    }
    .pb-9 {
        padding-bottom: var(--spacing-9) !important;
    }
    .pb-10 {
        padding-bottom: var(--spacing-10) !important;
    }

    /* :: padding x (left and right) :: */
    .px-0 {
        padding-right: var(--spacing-0) !important;
        padding-left: var(--spacing-0) !important;
    }
    .px-0\.5 {
        padding-right: var(--spacing-0_5) !important;
        padding-left: var(--spacing-0_5) !important;
    }
    .px-1 {
        padding-right: var(--spacing-1) !important;
        padding-left: var(--spacing-1) !important;
    }
    .px-2 {
        padding-right: var(--spacing-2) !important;
        padding-left: var(--spacing-2) !important;
    }
    .px-3 {
        padding-right: var(--spacing-3) !important;
        padding-left: var(--spacing-3) !important;
    }
    .px-4 {
        padding-right: var(--spacing-4) !important;
        padding-left: var(--spacing-4) !important;
    }
    .px-5 {
        padding-right: var(--spacing-5) !important;
        padding-left: var(--spacing-5) !important;
    }
    .px-6 {
        padding-right: var(--spacing-6) !important;
        padding-left: var(--spacing-6) !important;
    }
    .px-7 {
        padding-right: var(--spacing-7) !important;
        padding-left: var(--spacing-7) !important;
    }
    .px-8 {
        padding-right: var(--spacing-8) !important;
        padding-left: var(--spacing-8) !important;
    }
    .px-9 {
        padding-right: var(--spacing-9) !important;
        padding-left: var(--spacing-9) !important;
    }
    .px-10 {
        padding-right: var(--spacing-10) !important;
        padding-left: var(--spacing-10) !important;
    }

    /* :: padding y (top and bottom) :: */
    .py-0 {
        padding-top: var(--spacing-0) !important;
        padding-bottom: var(--spacing-0) !important;
    }
    .py-0\.5 {
        padding-top: var(--spacing-0_5) !important;
        padding-bottom: var(--spacing-0_5) !important;
    }
    .py-1 {
        padding-top: var(--spacing-1) !important;
        padding-bottom: var(--spacing-1) !important;
    }
    .py-2 {
        padding-top: var(--spacing-2) !important;
        padding-bottom: var(--spacing-2) !important;
    }
    .py-3 {
        padding-top: var(--spacing-3) !important;
        padding-bottom: var(--spacing-3) !important;
    }
    .py-4 {
        padding-top: var(--spacing-4) !important;
        padding-bottom: var(--spacing-4) !important;
    }
    .py-5 {
        padding-top: var(--spacing-5) !important;
        padding-bottom: var(--spacing-5) !important;
    }
    .py-6 {
        padding-top: var(--spacing-6) !important;
        padding-bottom: var(--spacing-6) !important;
    }
    .py-7 {
        padding-top: var(--spacing-7) !important;
        padding-bottom: var(--spacing-7) !important;
    }
    .py-8 {
        padding-top: var(--spacing-8) !important;
        padding-bottom: var(--spacing-8) !important;
    }
    .py-9 {
        padding-top: var(--spacing-9) !important;
        padding-bottom: var(--spacing-9) !important;
    }
    .py-10 {
        padding-top: var(--spacing-10) !important;
        padding-bottom: var(--spacing-10) !important;
    }
`
