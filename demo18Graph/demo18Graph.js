import { LightningElement, wire } from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class Demo18Graph extends LightningElement {
    errs;
    deliveries;

    @wire(graphql, {
        query: gql`
            query recentDeliveries {
                uiapi {
                    query {
                        Course_Delivery__c(first: 5, orderBy: {Start_Date__c: {order: DESC}})
                        {
                            edges {
                                node {
                                    Id
                                    Location__c {value}
                                    Start_Date__c {value}
                                    Region__c {value}
                                    Course__r {
                                        Name {value}
                                    }
                                    Instructor__r {
                                        Name {value}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    })
    wiredDeliveries({ data, errors }) {
        if (data) {
            this.deliveries = data.uiapi.query.Course_Delivery__c.edges.map(
                (edge) => edge.node
            )
            this.errs = undefined;
        }
        if (errors) {
            this.deliveries = undefined;
            this.errs = errors;
        }
    }
}