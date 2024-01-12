import React from 'react';

const page = () => {
    return (
        <div className='container'>
            <p className='m-0 p-0 py-5'>
                Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
                Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
                by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many
                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristi
            </p>

            {/* <div className='scroll-parent'>
                <div className='scroll-element primary'>
                    {Array.from({ length: 13 }).map((item, i) => {
                        return (
                            <div className='box' key={i}>
                                {i}
                            </div>
                        );
                    })}
                </div>
                <div className='scroll-element  secondary'>
                    {Array.from({ length: 11 }).map((item, i) => {
                        return (
                            <div className='box' key={i}>
                                {i}
                            </div>
                        );
                    })}
                </div>
            </div> */}

            <div className='slider-widget'>
                <div loop='' className='slider-animation-wrapper'>
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/3wtrDaAESflMICYhvZtOdE/3d4248c94b553f012fa63a6f0eb52826/Slack.svg'
                        alt='Slack'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2sFKKdOpxmVgpWs65YpSU3/df1c3d18dfbd1d540752cce56bce3535/Omniconvert.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/Oma32qGH0Mrvd0GDwye01/dbf9446b8e9d356738bb804e020dcba9/Hubspot.svg'
                        alt='Hubspot'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/51S20iDqjIQ93v3WkVsMkF/a316074ea318475105786e8d808c588e/gmail.svg'
                        alt='Gmail'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/7q04bTUUCcoWtXzN494E3I/347dfb3f7dfee092a3328d899a0dc620/GA-Integration_Button.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2sfh7DIpMg2kHXiz0icHNi/550125a6e0da967c7b608f623313e424/Property_1_asana.svg'
                        alt='Create Asana tasks for new Survey & Incoming Feedback responses or when a new Recording is created. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4VCGBnxidEWtUhJuqX5fcU/883c3b48b035e1ee690d77e704202d4d/Property_1_Zapier.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4A944uO2u8ijz0ueTW6Gix/64bb6b8d02d0080f3dc5c5043f5d475e/Property_1_Segment.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2Cbo3VgMuI3SLnaUIe8ifs/b8e642ec0d9672ed54ab0415df8121bf/Property_1_jira.svg'
                        alt='Create issues in Jira for new Hotjar Recordings or Survey & Incoming Feedback responses. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4OfG0A6SPKFtrKiz2vuLPq/9511d37ad8dc0d14c80b625badaeded5/Property_1_Miro.svg'
                        alt='Create cards in Miro with new Hotjar Incoming Feedback & Survey responses or based on new Recordings. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/51SMnafvp6c7zsrY8J0EQo/1caaa4193916dc81455e29eda5ddb9ce/Property_1_Trello.svg'
                        alt='Create Trello cards from new Hotjar Survey & Incoming Feedback responses or when a new Recording is collected. Available via Zapier. '
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/3aOI76fPHJ2rXoJKr8J1X8/bc83614db5f299b1760cce21065f2198/Property_1_microsoft-excel.svg'
                        alt='Add rows to Microsoft Excel when a new Recording or feedback response is created. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/6GxHuHnVO3oaiQkLRznyrv/ed2fb4fd18f9d26aba90aed0fd86b6dc/Property_1_Zendesk.svg'
                        alt='Create Zendesk tickets for new Incoming Feedback & Survey responses. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/1FcKgE6Wc4Q0oKlCrZe9db/a766ff23aadece8e7f64ad14716dc67c/Property_1_Optimizely.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/8yQ7IpqoEPQZM6k4Lqnyz/f804488b148c3947d3eafa3cfc579a99/Property_1_Shopify.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/3wtrDaAESflMICYhvZtOdE/3d4248c94b553f012fa63a6f0eb52826/Slack.svg'
                        alt='Slack'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2sFKKdOpxmVgpWs65YpSU3/df1c3d18dfbd1d540752cce56bce3535/Omniconvert.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/Oma32qGH0Mrvd0GDwye01/dbf9446b8e9d356738bb804e020dcba9/Hubspot.svg'
                        alt='Hubspot'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/51S20iDqjIQ93v3WkVsMkF/a316074ea318475105786e8d808c588e/gmail.svg'
                        alt='Gmail'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/7q04bTUUCcoWtXzN494E3I/347dfb3f7dfee092a3328d899a0dc620/GA-Integration_Button.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2sfh7DIpMg2kHXiz0icHNi/550125a6e0da967c7b608f623313e424/Property_1_asana.svg'
                        alt='Create Asana tasks for new Survey & Incoming Feedback responses or when a new Recording is created. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4VCGBnxidEWtUhJuqX5fcU/883c3b48b035e1ee690d77e704202d4d/Property_1_Zapier.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4A944uO2u8ijz0ueTW6Gix/64bb6b8d02d0080f3dc5c5043f5d475e/Property_1_Segment.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/2Cbo3VgMuI3SLnaUIe8ifs/b8e642ec0d9672ed54ab0415df8121bf/Property_1_jira.svg'
                        alt='Create issues in Jira for new Hotjar Recordings or Survey & Incoming Feedback responses. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/4OfG0A6SPKFtrKiz2vuLPq/9511d37ad8dc0d14c80b625badaeded5/Property_1_Miro.svg'
                        alt='Create cards in Miro with new Hotjar Incoming Feedback & Survey responses or based on new Recordings. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/51SMnafvp6c7zsrY8J0EQo/1caaa4193916dc81455e29eda5ddb9ce/Property_1_Trello.svg'
                        alt='Create Trello cards from new Hotjar Survey & Incoming Feedback responses or when a new Recording is collected. Available via Zapier. '
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/3aOI76fPHJ2rXoJKr8J1X8/bc83614db5f299b1760cce21065f2198/Property_1_microsoft-excel.svg'
                        alt='Add rows to Microsoft Excel when a new Recording or feedback response is created. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/6GxHuHnVO3oaiQkLRznyrv/ed2fb4fd18f9d26aba90aed0fd86b6dc/Property_1_Zendesk.svg'
                        alt='Create Zendesk tickets for new Incoming Feedback & Survey responses. Available via Zapier.'
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/1FcKgE6Wc4Q0oKlCrZe9db/a766ff23aadece8e7f64ad14716dc67c/Property_1_Optimizely.svg'
                        alt=''
                    />
                    <img
                        src='https://images.ctfassets.net/lh3zuq09vnm2/8yQ7IpqoEPQZM6k4Lqnyz/f804488b148c3947d3eafa3cfc579a99/Property_1_Shopify.svg'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
