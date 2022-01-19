/// <reference types="@types/google.visualization" />
declare namespace google {
    namespace visualization {
        interface ChartEditorOptions {
            dataSourceInput?: HTMLElement | 'urlbox';
        }
        class ChartEditor {
            openDialog(chartWrapper: google.visualization.ChartWrapper, options: ChartEditorOptions): void;
            getChartWrapper(): google.visualization.ChartWrapper;
            setChartWrapper(chartWrapper: google.visualization.ChartWrapper): void;
            closeDialog(): void;
        }
    }
}
