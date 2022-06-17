import { render } from "react-dom";
import "./style.css";
import * as React from "react";
import {
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    Day,
    Week,
    WorkWeek,
    Month,
    Inject,
    Resize,
    DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { applyCategoryColor } from "./helper";

import { extend } from "@syncfusion/ej2-base";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { SampleBase } from "./sample-base";
import { PropertyPane } from "./property-pane";
import * as dataSource from "./datasource.json";
/**
 * Schedule views sample
 */
export default class Views extends SampleBase {
    scheduleObj;
    data = extend([], dataSource.zooEventsData, null, true);
    viewOptions = [
        { text: "Day", value: "Day" },
        { text: "Week", value: "Week" },
        { text: "WorkWeek", value: "WorkWeek" },
        { text: "Month", value: "Month" },
    ];
    fields = { text: "text", value: "value" };
    onViewChange(args) {
        this.scheduleObj.currentView = args.value;
        this.scheduleObj.dataBind();
    }
    onEventRendered(args) {
        applyCategoryColor(args, this.scheduleObj.currentView);
    }
    render() {
        return (
            <div className="schedule-control-section">
                <div className="col-lg-9 control-section">
                    <div className="control-wrapper">
                        <ScheduleComponent
                            width="100%"
                            height="650px"
                            ref={schedule => (this.scheduleObj = schedule)}
                            selectedDate={new Date(2021, 1, 15)}
                            eventSettings={{ dataSource: this.data }}
                            eventRendered={this.onEventRendered.bind(this)}
                        >
                            <ViewsDirective>
                                <ViewDirective option="Day" />
                                <ViewDirective option="Week" />
                                <ViewDirective option="WorkWeek" />
                                <ViewDirective option="Month" />
                            </ViewsDirective>
                            <Inject
                                services={[
                                    Day,
                                    Week,
                                    WorkWeek,
                                    Month,
                                    Resize,
                                    DragAndDrop,
                                ]}
                            />
                        </ScheduleComponent>
                    </div>
                </div>
                <div className="col-lg-3 property-section">
                    <PropertyPane title="Properties">
                        <table
                            id="property"
                            title="Properties"
                            className="property-panel-table"
                            style={{ width: "100%" }}
                        >
                            <tbody>
                                <tr style={{ height: "50px" }}>
                                    <td style={{ width: "100%" }}>
                                        <div>
                                            <DropDownListComponent
                                                style={{ padding: "6px" }}
                                                value={"Week"}
                                                fields={this.fields}
                                                dataSource={this.viewOptions}
                                                change={this.onViewChange.bind(
                                                    this
                                                )}
                                                placeholder="Current View"
                                                floatLabelType="Always"
                                            ></DropDownListComponent>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div>
            </div>
        );
    }
}

// render(<Views />, document.getElementById('sample'));
