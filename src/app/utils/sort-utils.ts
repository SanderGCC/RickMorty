export let Utils = {
  /**
   * Metodo utilizado para obtener un arreglo de un objeto con sus key ordenadas de mayor a menor
   * @param entities arraglo que se desea ordenar
   * @returns arreglo ordenado
   */
  sortKeyMaxToMin(entities: any): any {
      let entitiesSort: Array<any> = [];
      const keysSort = Object.keys(entities).sort((b, a) => (+a) - (+b));
      keysSort.map(key => entitiesSort.push(entities[key]));
      return entitiesSort;
  }
}