import { Injectable } from '@angular/core';
import { Node } from '../interfaces/node';
import { Families } from '../constants/families';
import { DatePipe } from '@angular/common';
import * as go from 'gojs';
import { FamiliesService } from './families.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RenderService {
  listFamilies: Node[] = [];

  constructor(
    private datePipe: DatePipe,
    private familiesService: FamiliesService
  ) {}

  /**
   * [getFamilies description]
   * @return {Node[]} [description]
   */
  getFamilies(): Observable<Node[]> {
    return this.familiesService.getFamilies();
  }

  getDateToFrench(date: string): string {
    if (date == '') {
      return date;
    }
    const myDate: Date = new Date(date);
    return this.datePipe.transform(myDate, 'd MMMM yyyy') || '';
  }

  /**
   * [getNodeTemplate description]
   * @return {any} [description]
   */
  getNodeTemplate(): any {
    const $ = go.GraphObject.make;

    return $(
      go.Node,
      'Auto',
      $(
        go.Panel,
        'Vertical',
        { margin: 0 },

        // Image
        $(
          go.Picture,
          {
            width: 100,
            height: 60,
            margin: 0,
            alignment: go.Spot.TopLeft,
          },
          new go.Binding('source', 'photo', (photo) =>
            photo && photo.trim() !== '' ? photo : '/img/portraits/default.PNG'
          )
        ),
        // Texte
        $(
          go.Panel,
          'Auto',
          { margin: 0, width: 100 },
          $(go.Shape, 'Rectangle', {
            fill: 'lightblue',
            strokeWidth: 0,
          }),
          $(
            go.TextBlock,
            {
              font: 'bold 11pt sans-serif',
              margin: 6,
              stroke: 'black',
              wrap: go.TextBlock.WrapFit,
              maxSize: new go.Size(100, Infinity),
              width: 100,
            },
            new go.Binding('text', 'name')
          )
        ),
        $(
          go.Panel,
          'Auto',
          {
            margin: 0, // un petit espace au-dessus
            width: 100,
            visible: false,
          },
          new go.Binding(
            'visible',
            'birth',
            (birth) => !!birth && birth.trim() !== ''
          ),
          $(go.Shape, 'Rectangle', {
            fill: 'lightgreen', // vert clair
            strokeWidth: 0,
          }),
          $(
            go.TextBlock,
            {
              font: '10pt sans-serif',
              margin: 6,
              stroke: 'black',
              wrap: go.TextBlock.WrapFit,
              textAlign: 'center',
              maxSize: new go.Size(100, Infinity),
              width: 100,
            },
            new go.Binding('text', '', (data: Node) => {
              const birthplace = data.birthplace ? '\n' + data.birthplace : '';
              const country = data.birthcountry ? ' ' + data.birthcountry : '';
              const birth = data.birth ?? '';

              return this.getDateToFrench(birth) + birthplace + country;
            })
          )
        ),
        $(
          go.Panel,
          'Auto',
          {
            margin: 0,
            width: 100,
            visible: false,
          },
          new go.Binding(
            'visible',
            'death',
            (death) => !!death && death.trim() !== ''
          ),
          $(go.Shape, 'Rectangle', {
            fill: 'lightcoral', // rouge clair
            strokeWidth: 0,
          }),
          $(
            go.TextBlock,
            {
              font: '10pt sans-serif',
              margin: 6,
              stroke: 'black',
              wrap: go.TextBlock.WrapFit,
              textAlign: 'center',
              maxSize: new go.Size(100, Infinity),
              width: 100,
            },
            new go.Binding('text', '', (data: Node) => {
              const deathplace = data.deathplace ? '\n' + data.deathplace : '';
              const country = data.deathcountry ? ' ' + data.deathcountry : '';
              const death = data.death ?? '';

              return this.getDateToFrench(death) + deathplace + country;
            })
          )
        ),
        $(
          go.Panel,
          'Auto',
          {
            margin: 0,
            width: 100,
            visible: false,
          },
          new go.Binding(
            'visible',
            'birth',
            (birth) => !!birth && birth.trim() !== ''
          ),
          $(go.Shape, 'Rectangle', {
            fill: 'lightgray', // gris clair
            strokeWidth: 0,
          }),
          $(
            go.TextBlock,
            {
              font: '10pt sans-serif',
              margin: 6,
              stroke: 'black',
              wrap: go.TextBlock.WrapFit,
              textAlign: 'center',
              maxSize: new go.Size(100, Infinity),
              width: 100,
            },
            new go.Binding('text', '', (data: Node) => {
              const age = data.birth
                ? this.getAge(data.birth, data.death) + ' ans'
                : '';

              return age;
            })
          )
        )
      )
    );
  }

  /**
   * [getGroupTemplate description]
   * @return {any} [description]
   */
  getGroupTemplate(): any {
    const $ = go.GraphObject.make;

    return $(
      go.Group,
      'Spot',
      {
        isSubGraphExpanded: true,
        layout: $(go.GridLayout, { spacing: new go.Size(20, 20) }),
      },
      $(
        go.Panel,
        'Auto',
        $(go.Shape, 'Rectangle', { fill: '#EFEFEF', stroke: 'gray' }),
        $(go.Placeholder, { padding: 10 })
      )
    );
  }

  /**
   * [getDefaultLink description]
   * @return {any} [description]
   */
  getStyleDefaultLink(): any {
    const $ = go.GraphObject.make;

    return $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: '#555' })
    );
  }

  /**
   * [getStyleChildLink description]
   * @return {any} [description]
   */
  getStyleParentChildLink(): any {
    const $ = go.GraphObject.make;

    return $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: '#555' })
    );
  }

  /**
   * [getStyleSpouseLink description]
   * @return {any} [description]
   */
  getStyleSpouseLink(): any {
    const $ = go.GraphObject.make;
    return $(
      go.Link,
      {
        routing: go.Link.Orthogonal,
        selectable: false,
      },
      $(go.Shape, {
        strokeDashArray: [5, 5],
        strokeWidth: 2,
        stroke: '#5D5C61',
      }),
      $(go.Shape, { toArrow: '' })
    );
  }

  /**
   * [getLayoutCustom description]
   * @return {any} [description]
   */
  getLayoutCustom(): any {
    const $ = go.GraphObject.make;
    return $(go.TreeLayout, {
      angle: 90, // Organisation verticale (de haut en bas)
      layerSpacing: 150, // Espacement entre les niveaux (générations)
      nodeSpacing: 50, // Espacement entre les nœuds sur la même couche
      arrangement: go.TreeLayout.ArrangementHorizontal, // Aligner les racines
      arrangementSpacing: new go.Size(200, 200),
    });
  }

  /**
   * Génère les liens parent-enfant à partir des données de l'arbre
   * @param  {Node[]} members [description]
   * @return {any[]}          [description]
   */
  createParentChildLinks(members: Node[]): any[] {
    const _this = this;
    const links: any[] = [];

    members.forEach((member: Node) => {
      const father = _this.findPerson(members, member.father);
      const hasGroup = father && father.group;

      if (hasGroup) {
        links.push({
          from: father.group,
          to: member.key,
          category: 'ParentChild',
        });
      }

      if (!hasGroup && member.mother) {
        links.push({
          from: member.mother,
          to: member.key,
          category: 'ParentChild',
        });
      }
      if (!hasGroup && member.father) {
        links.push({
          from: member.father,
          to: member.key,
          category: 'ParentChild',
        });
      }
      if (member.spouse) {
        links.push({ from: member.key, to: member.spouse, category: 'Spouse' });
      }
    });

    return links;
  }

  /**
   * [findPerson description]
   * @param  {Node[]}    members [description]
   * @param  {number |       undefined}   key [description]
   * @return {Node}              [description]
   */
  findPerson(
    members: Node[],
    key: number | undefined
  ): Node | undefined | null {
    if (typeof key === 'undefined') {
      return null;
    }
    return members.find((value) => {
      return value.key === key;
    });
  }

  getAge(startDate: string, endDate?: string): number {
    var today = endDate ? new Date(endDate) : new Date();
    var birthDate = new Date(startDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
