/// <reference path="./types.ts" />
import { Subject } from 'rxjs';
export class ChartEditorRef {
    constructor(editor) {
        this.editor = editor;
        this.doneSubject = new Subject();
        this.addEventListeners();
    }
    /**
     * Gets an observable that is notified when the dialog is saved.
     * Emits either the result if the dialog was saved or `null` if editing was cancelled.
     */
    afterClosed() {
        return this.doneSubject.asObservable();
    }
    /**
     * Stops editing the chart and closes the dialog.
     */
    cancel() {
        this.editor.closeDialog();
    }
    addEventListeners() {
        google.visualization.events.addOneTimeListener(this.editor, 'ok', () => {
            google.visualization.events.removeAllListeners(this.editor);
            const updatedChartWrapper = this.editor.getChartWrapper();
            this.doneSubject.next(updatedChartWrapper);
            this.doneSubject.complete();
        });
        google.visualization.events.addOneTimeListener(this.editor, 'cancel', () => {
            google.visualization.events.removeAllListeners(this.editor);
            this.doneSubject.next(null);
            this.doneSubject.complete();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtZWRpdG9yLXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYW5ndWxhci1nb29nbGUtY2hhcnRzL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1lZGl0b3IvY2hhcnQtZWRpdG9yLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBbUM7QUFFbkMsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUE2QixNQUF3QztRQUF4QyxXQUFNLEdBQU4sTUFBTSxDQUFrQztRQUZwRCxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBRzVELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNyRSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUQsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN6RSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGVzLnRzXCIgLz5cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBFZGl0Q2hhcnRSZXN1bHQgPSBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIgfCBudWxsO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnRFZGl0b3JSZWYge1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbmVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8RWRpdENoYXJ0UmVzdWx0PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWRpdG9yOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydEVkaXRvcikge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBkaWFsb2cgaXMgc2F2ZWQuXG4gICAqIEVtaXRzIGVpdGhlciB0aGUgcmVzdWx0IGlmIHRoZSBkaWFsb2cgd2FzIHNhdmVkIG9yIGBudWxsYCBpZiBlZGl0aW5nIHdhcyBjYW5jZWxsZWQuXG4gICAqL1xuICBwdWJsaWMgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxFZGl0Q2hhcnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5kb25lU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBlZGl0aW5nIHRoZSBjaGFydCBhbmQgY2xvc2VzIHRoZSBkaWFsb2cuXG4gICAqL1xuICBwdWJsaWMgY2FuY2VsKCkge1xuICAgIHRoaXMuZWRpdG9yLmNsb3NlRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRPbmVUaW1lTGlzdGVuZXIodGhpcy5lZGl0b3IsICdvaycsICgpID0+IHtcbiAgICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5yZW1vdmVBbGxMaXN0ZW5lcnModGhpcy5lZGl0b3IpO1xuXG4gICAgICBjb25zdCB1cGRhdGVkQ2hhcnRXcmFwcGVyID0gdGhpcy5lZGl0b3IuZ2V0Q2hhcnRXcmFwcGVyKCk7XG5cbiAgICAgIHRoaXMuZG9uZVN1YmplY3QubmV4dCh1cGRhdGVkQ2hhcnRXcmFwcGVyKTtcbiAgICAgIHRoaXMuZG9uZVN1YmplY3QuY29tcGxldGUoKTtcbiAgICB9KTtcblxuICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRPbmVUaW1lTGlzdGVuZXIodGhpcy5lZGl0b3IsICdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICBnb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMucmVtb3ZlQWxsTGlzdGVuZXJzKHRoaXMuZWRpdG9yKTtcblxuICAgICAgdGhpcy5kb25lU3ViamVjdC5uZXh0KG51bGwpO1xuICAgICAgdGhpcy5kb25lU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=