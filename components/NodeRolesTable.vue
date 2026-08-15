<script setup>
import { nodes } from '../data/cluster'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Node</th>
        <th>Role</th>
        <th>Taint</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="node in nodes" :key="node.id">
        <td><strong>{{ node.id }}</strong></td>
        <td>{{ node.roleSummary }}</td>
        <td><code v-if="node.taint !== 'None'">{{ node.taint }}</code><template v-else>None</template></td>
      </tr>
    </tbody>
  </table>
</template>
