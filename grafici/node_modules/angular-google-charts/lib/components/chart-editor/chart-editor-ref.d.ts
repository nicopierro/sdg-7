/// <reference path="types.d.ts" />
/// <reference types="@types/google.visualization" />
import { Observable } from 'rxjs';
export declare type EditChartResult = google.visualization.ChartWrapper | null;
export declare class ChartEditorRef {
    private readonly editor;
    private readonly doneSubject;
    constructor(editor: google.visualization.ChartEditor);
    /**
     * Gets an observable that is notified when the dialog is saved.
     * Emits either the result if the dialog was saved or `null` if editing was cancelled.
     */
    afterClosed(): Observable<EditChartResult>;
    /**
     * Stops editing the chart and closes the dialog.
     */
    cancel(): void;
    private addEventListeners;
}
