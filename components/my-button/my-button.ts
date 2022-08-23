import { computed, defineComponent } from 'vue';

export default defineComponent({
    props: {
        variant: {
            type: String,
            default: 'blush-40',
        },
        size: {
            type: String,
            default: 'md',
        },
        isFullWidth: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const buttonClasses = computed(() => {
            return [
                'btn',
                'btn-' + props.size,
                'bg-' + props.variant,
                'flex items-center text-cream-70 rounded-md',
                { 'w-full': !!props.isFullWidth },
            ];
        });

        return {
            buttonClasses,
        };
    },
});
